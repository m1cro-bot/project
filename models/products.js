'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    product_type_code: DataTypes.INTEGER,
    return_merchandise_authorization_number: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_price: DataTypes.STRING,
    product_color: DataTypes.STRING,
    product_size: DataTypes.STRING,
    product_description: DataTypes.STRING,
    other_product_details: DataTypes.STRING
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};