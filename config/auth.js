require('dotenv').config()

exports.secret_key = process.env.SECRET_KEY;


exports.host =  process.env.MAIL_SERVICE;
exports.user = process.env.MAIL_USER;
exports.pass =  process.env.MAIL_PASSWORD;