'use strict';

const { index } = require("../../models/product.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", index(), {});
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
