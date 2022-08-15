'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tittle: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      longDescription: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.INT
      },
      nights: {
        type: Sequelize.INT
      },
      stars: {
        type: Sequelize.INT
      },
      base: {
        type: Sequelize.INT
      },
      excursion: {
        type: Sequelize.BOOLEAN
      },
      transfer: {
        type: Sequelize.BOOLEAN
      },
      flights: {
        type: Sequelize.BOOLEAN
      },
      image: {
        type: Sequelize.VARCHAR
      },
      region: {
        type: Sequelize.STRING
      },
      salesPrice: {
        type: Sequelize.DECIMAL
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
