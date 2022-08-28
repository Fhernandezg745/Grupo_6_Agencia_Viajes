'use strict';

const { index } = require("../../models/users.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let position = [
      {
      role: "admin"
    },
    {
      role: "sales"
    }
  ]
    await queryInterface.bulkInsert("position", position, {});
    
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
