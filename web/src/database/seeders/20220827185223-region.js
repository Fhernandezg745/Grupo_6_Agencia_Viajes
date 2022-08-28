'use strict';

const { index } = require("../../models/product.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let region = [
      {
        region: "África"
      },
      {
        region: "Lejano Oriente"
      },
      {
        region: "Medio Oriente"
      },
      {
        region: "Islas del Pácifico Sur"
      },
      {
        region: "Islas del Índico"
      },
      {
        region: "Oceanía"
      },
      {
        region: "Sudeste Asíatico"
      }
    ];
    await queryInterface.bulkInsert("region", region,{});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
