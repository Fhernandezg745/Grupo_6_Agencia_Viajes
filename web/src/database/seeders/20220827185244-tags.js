'use strict';

const { index } = require("../../models/product.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let tags = index().map(product => {
      return Object({tags: product.tags})
    })
//    let Onetag = tags.split("", 1);
    await queryInterface.bulkInsert("tags", tags, {});
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
