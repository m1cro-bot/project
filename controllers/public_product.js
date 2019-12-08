var model = require('../models/index');

exports.showAllProduct = function (req, res){
    model.Products.findAll({})
    .then(Product => {
        res.json(Product)
    })
}

exports.selectType = function(req, res){
    model.Ref_Product_Types.findOne({
        where: { parent_product_type_code: req.params.parent_product_type_code }
    })
    .then(ok =>{
        const product_type_code = ok.product_type_code;
        
        model.Products.findAll({
            where: { product_type_code: product_type_code }
        })
        .then(p_ok => {
            res.json(p_ok)
        })
    })
}