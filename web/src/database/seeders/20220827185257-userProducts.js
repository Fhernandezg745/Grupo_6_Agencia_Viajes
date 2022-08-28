'use strict';

const { index } = require("../../models/product.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let usersproducts = index().map(product =>{
      return Object({...product.id})
    })
    await queryInterface.bulkInsert("usersProducts", usersproducts, {});
    
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
