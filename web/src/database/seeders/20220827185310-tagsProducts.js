'use strict';

const { index } = require("../../models/product.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let tagsproducts = index().map(product =>{
      return Object({...product.id})
    })
    await queryInterface.bulkInsert("tagsProducts", tagsproducts, {});
    
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
