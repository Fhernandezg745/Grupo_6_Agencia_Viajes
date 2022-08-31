"use strict";

const { index } = require("../../models/product.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tagsProducts",
      [
        {
          productId: 1,
          tagId: 1,
        },
        {
          productId: 1,
          tagId: 2,
        },
        {
          productId: 1,
          tagId: 3,
        },
        {
          productId: 2,
          tagId: 4,
        },
        {
          productId: 2,
          tagId: 5,
        },
        {
          productId: 2,
          tagId: 6,
        },
        {
          productId: 3,
          tagId: 7,
        },
        {
          productId: 3,
          tagId: 8,
        },
        {
          productId: 3,
          tagId: 9,
        },
        {
          productId: 4,
          tagId: 10,
        },
        {
          productId: 4,
          tagId: 11,
        },
        {
          productId: 4,
          tagId: 12,
        },
        {
          productId: 5,
          tagId: 13,
        },
        {
          productId: 5,
          tagId: 14,
        },
        {
          productId: 5,
          tagId: 15,
        },
        {
          productId: 6,
          tagId: 16,
        },
        {
          productId: 6,
          tagId: 17,
        },
        {
          productId: 6,
          tagId: 18,
        },
        {
          productId: 7,
          tagId: 19,
        },
        {
          productId: 7,
          tagId: 20,
        },
        {
          productId: 7,
          tagId: 21,
        },
        {
          productId: 8,
          tagId: 22,
        },
        {
          productId: 8,
          tagId: 23,
        },
        {
          productId: 8,
          tagId: 24,
        },
        {
          productId: 8,
          tagId: 25,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
