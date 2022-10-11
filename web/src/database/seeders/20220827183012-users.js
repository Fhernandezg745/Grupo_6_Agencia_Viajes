'use strict';

const { index } = require("../../models/users.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let users = index().map(user => Object({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
      password: user.password,
      email: user.email,
      isAdmin: user.isAdmin,
      avatarId: user.avatarId
  }))
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
