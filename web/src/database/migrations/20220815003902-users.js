'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      nationalID: {
        type: Sequelize.VARCHAR
      },
      birthDate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.VARCHAR
      },
      address: {
        type: Sequelize.VARCHAR
      },
      email: {
        type: Sequelize.VARCHAR
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.VARCHAR
      },
      zipCode: {
        type: Sequelize.VARCHAR
      },
      city: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.VARCHAR
      },
      avatar: {
        type: Sequelize.VARCHAR
      },
      position: {
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
