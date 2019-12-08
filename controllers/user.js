var model = require('../models/index')
var Sequelize = require('sequelize')
var bcrypt = require('twin-bcrypt')
var validasi = require('../validators/register_entry')
var validregister = validasi.schemaRegisterEntry;
var generateToken = require('../services/token_generate')
var mailverify = require('../services/email_verivication')
var key = require('../config/auth').secret_key;


var Op = Sequelize.Op;
var salt = 10;

exports.registerEntry = function (req, res, next){

    const {
        email,
        login_name,
        login_password
    } = req.body;
 

    validregister.validate({
        email: email,
        login_name: login_name,
        login_password: login_password
    })
    .then(validateData => {
        model.Customers.findOne({
            where: {
                [Op.or]: [{email: email}, {login_name: login_name}]
            }
        })
        .then(dataAllready => {
            if(dataAllready == null) {
                var login_password = bcrypt.hashSync(validateData.login_password, salt)

                model.Customers.create({
                    email: validateData.email,
                    login_name: validateData.login_name,
                    login_password: login_password,
                })
                .then(successCreated => {
                    const generateToken1 = new generateToken(successCreated.email)
                    const newmailverify = new mailverify(successCreated.email)
                    res.json({
                            email: successCreated.email,
                            pass: validateData.login_password,
                            token: generateToken1.token,
                        message: "Berhasil Mendaftar",
                        verify: newmailverify,
                        key: key
                    })
                })
                .catch(err => {
                    return res.json(err)
                })
                return next();
            }

            else if (login_name == dataAllready.login_name){
                res.json('Username Tidak Bisa Digunakan')
            }

            else if (email == dataAllready.email){
                res.json('Email Telah Terdaftar')
            }

        })
    })
    .catch(err => {
        return res.json(err.message)
    })
        
}


exports.loginEntry = function (req, res) {
    const {
        email,
        login_password
    } = req.body;

    
    model.Customers.findOne({
        where: {
            email: email,
        }
    })
    .then (emailOk => {
        if (emailOk){
            
            var result = bcrypt.compareSync(login_password, emailOk.login_password);
            if (result == true){
                var generateToken1 = new generateToken(emailOk);
                if (!generateToken1.token){
                    res.json('token Kosong.......')
                }
                else{
                    res.json({
                        token: generateToken1.token,
                        message: emailOk.login_name+" Berhasil Login"
                    })
                }
            }
            else {
                return res.json('Password Salah')
            }
        }
        else {
            res.json('Email Salah')
        }
    })
}

exports.emailVerify = function (req, res){

}

exports.userDataEntry = function (req, res) {

    res.json('post created....')
    
}

exports.setCookies = function (req, res) {
    res.send(req.cookies.token)
}
