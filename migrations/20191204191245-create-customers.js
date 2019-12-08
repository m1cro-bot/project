'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      customer_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER(30)
      },
      organisation_or_person: {
        type: Sequelize.STRING(50)
      },
      organisation_name: {
        type: Sequelize.STRING(255)
      },
      gender: {
        type: Sequelize.STRING(50)
      },
      first_name: {
        type: Sequelize.STRING(255)
      },
      middle_initial: {
        type: Sequelize.STRING(255)
      },
      last_name: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(255)
      },
      login_name: {
        type: Sequelize.STRING(255)
      },
      login_password: {
        type: Sequelize.STRING(255)
      },
      phone_number: {
        type: Sequelize.INTEGER(13)
      },
      address_line_1: {
        type: Sequelize.STRING(255)
      },
      address_line_2: {
        type: Sequelize.STRING(255)
      },
      address_line_3: {
        type: Sequelize.STRING(255)
      },
      address_line_4: {
        type: Sequelize.STRING(255)
      },
      town_city: {
        type: Sequelize.STRING(255)
      },
      country: {
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
    return queryInterface.dropTable('Customers');
  }
};