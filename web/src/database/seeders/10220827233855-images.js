'use strict';

const { index } = require("../../models/product.model")
const users = require("../../models/users.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let images = index().map(product => {
      return Object({images: product.image})
    })
    let imageUsers = users.index().map(user => {
      return Object({images: user.avatar})
    })
    let total = [...images, ...imageUsers];
    await queryInterface.bulkInsert("images", total, {}); 
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
