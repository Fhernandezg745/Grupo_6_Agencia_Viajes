'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('position', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('position');
  }
};
