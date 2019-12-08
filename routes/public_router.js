var express = require('express');
var router = express.Router();
var todo = require('../controllers/public_product');

/* GET users listing. */
router.get('/', todo.showAllProduct);
router.get('/type/:parent_product_type_code', todo.selectType);

module.exports = router;
