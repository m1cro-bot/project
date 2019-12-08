'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    organisation_or_person: DataTypes.STRING,
    organisation_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    first_name: DataTypes.STRING,
    middle_initial: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    login_name: DataTypes.STRING,
    login_password: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    address_line_3: DataTypes.STRING,
    address_line_4: DataTypes.STRING,
    town_city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Customers.associate = function(models) {
    // associations can be defined here
  };
  return Customers;
};