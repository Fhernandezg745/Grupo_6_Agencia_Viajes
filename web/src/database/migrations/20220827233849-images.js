'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('images', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      images: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('iamges');
  }
};
