'use strict';

const { index } = require("../../models/users.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert("users", index(), {});
    
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
