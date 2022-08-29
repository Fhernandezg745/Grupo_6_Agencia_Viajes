'use strict';

const { index } = require("../../models/users.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let users = index().map(user => Object({... user, avatar: null}))
    await queryInterface.bulkInsert("users", users, {});

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
