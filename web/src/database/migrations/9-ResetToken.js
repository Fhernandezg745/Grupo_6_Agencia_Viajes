'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.createTable('resetTokens', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          email: {
              type: Sequelize.STRING
          },
          token: {
              type: Sequelize.STRING
          },
          expiration:{
              type: Sequelize.DATE
          },
          used: {
              type: Sequelize.INTEGER,
          }
      });
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('resetTokens');
  }
};
