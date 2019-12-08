var jwt = require('jsonwebtoken');
var secret_key = require('../config/auth').secret_key;

var expiresIn = 86400;

module.exports = function (data){
    this.token = jwt.sign({data}, secret_key, {expiresIn: expiresIn});
}