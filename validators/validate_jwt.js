var secret_key = require('../config/auth').secret_key;
var jwt = require('jsonwebtoken')

exports.validate = function (req, res, next) {

    if (typeof req.headers.authorization !== 'undefined') {

        let token = req.headers.authorization.split(' ')[1]
        
        jwt.verify(token, secret_key, (err, decoded) => {
            if (err){
                res.status(500).json({error: 'Not Authorized'})
            }
            return next();
        })
    }
    else{
        res.json('Dont have access')
    }
}