'use strict';

const { index } = require("../../models/product.model")

 module.exports = {
  async up (queryInterface, Sequelize) {
    let tag = index().map(product => {
    let oneTag = product.tags.split(" ");
      return oneTag
    })

    let merged = [].concat.apply([],tag)
    let tagArray = merged.map(element => {
      return Object({tags: element})
    })
    

   await queryInterface.bulkInsert("tags", tagArray, {});
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
