'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(20)
      },
      product_type_code: {
        unique: true,
        type: Sequelize.INTEGER(10)
      },
      return_merchandise_authorization_number: {
        type: Sequelize.STRING(30)
      },
      product_name: {
        type: Sequelize.STRING(255)
      },
      product_price: {
        type: Sequelize.INTEGER(10)
      },
      product_color: {
        type: Sequelize.STRING(50)
      },
      product_size: {
        type: Sequelize.STRING(10)
      },
      product_description: {
        type: Sequelize.STRING(255)
      },
      other_product_details: {
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
    return queryInterface.dropTable('Products');
  }
};