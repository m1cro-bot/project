var nodemailer = require('nodemailer');
var mailTransport = require('../config/auth')

module.exports = function (data){
    var smtpConfig = {
        host: mailTransport.host,
        port: 465,
        secure: true, // use SSL
        auth: {
            user: mailTransport.user,
            pass: mailTransport.pass
        }
    };
    var transporter = nodemailer.createTransport(smtpConfig);

    var mailOption = {
        from: mailTransport.host,
        to: data,
        subject: 'Verivication Email',
        html: '<p>Silahkan Klik Link Dibawah Ini</p><br>'
    }

    transporter.sendMail(mailOption, function(err, info) {
        if (err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
}