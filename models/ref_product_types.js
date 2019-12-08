'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ref_Product_Types = sequelize.define('Ref_Product_Types', {
    product_type_code: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    parent_product_type_code: DataTypes.INTEGER,
    product_type_description: DataTypes.STRING
  }, {});
  Ref_Product_Types.associate = function(models) {
    // associations can be defined here
  };
  return Ref_Product_Types;
};