'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ref_Product_Types', {
      product_type_code: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      parent_product_type_code: {
        unique: true,
        type: Sequelize.INTEGER(20)
      },
      product_type_description: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ref_Product_Types');
  }
};