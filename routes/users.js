var express = require('express');
var router = express.Router();
var todo = require('../controllers/user');
var validate = require('../validators/validate_jwt').validate;

/* GET users listing. */
router.post('/login/entry', todo.loginEntry);
router.post('/register/entry', todo.registerEntry, todo.emailVerify);
router.post('/user/data', validate, todo.userDataEntry);

router.get('/coki', todo.setCookies);

module.exports = router;
