"use strict";

const { index } = require("../../models/product.model");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "tagsProducts", [{
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
                    productId: 3,
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
                    productId: 5,
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
                    productId: 6,
                    tagId: 19,
                },
                {
                    productId: 6,
                    tagId: 20,
                },
                {
                    productId: 7,
                    tagId: 21,
                },
                {
                    productId: 7,
                    tagId: 22,
                },
                {
                    productId: 7,
                    tagId: 23,
                },
                {
                    productId: 7,
                    tagId: 24,
                },
                {
                    productId: 8,
                    tagId: 25,
                },
                {
                    productId: 8,
                    tagId: 26,
                },
                {
                    productId: 8,
                    tagId: 27,
                },
                {
                    productId: 8,
                    tagId: 28,
                },
                {
                    productId: 9,
                    tagId: 29,
                },
                {
                    productId: 9,
                    tagId: 30,
                },
                {
                    productId: 9,
                    tagId: 31,
                },
                {
                    productId: 10,
                    tagId: 32,
                },
                {
                    productId: 10,
                    tagId: 33,
                },
                {
                    productId: 11,
                    tagId: 34,
                },
                {
                    productId: 11,
                    tagId: 35,
                },
                {
                    productId: 12,
                    tagId: 36,
                },
                {
                    productId: 12,
                    tagId: 37,
                },
                {
                    productId: 12,
                    tagId: 38,
                },
                {
                    productId: 13,
                    tagId: 39,
                },
                {
                    productId: 13,
                    tagId: 40,
                },
                {
                    productId: 14,
                    tagId: 41,
                },
                {
                    productId: 14,
                    tagId: 42,
                },
                {
                    productId: 15,
                    tagId: 43,
                },
                {
                    productId: 15,
                    tagId: 44,
                },
                {
                    productId: 15,
                    tagId: 45,
                },
                {
                    productId: 15,
                    tagId: 46,
                },
                {
                    productId: 16,
                    tagId: 47,
                },
                {
                    productId: 16,
                    tagId: 48,
                },
                {
                    productId: 16,
                    tagId: 49,
                },
                {
                    productId: 16,
                    tagId: 50,
                },
                {
                    productId: 17,
                    tagId: 51,
                },
                {
                    productId: 17,
                    tagId: 52,
                },
                {
                    productId: 17,
                    tagId: 53,
                },
                {
                    productId: 18,
                    tagId: 54,
                },
                {
                    productId: 18,
                    tagId: 55,
                },
                {
                    productId: 18,
                    tagId: 56,
                }
            ], {}
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