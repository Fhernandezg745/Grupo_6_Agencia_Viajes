'use strict';

const { index } = require("../../models/product.model")

module.exports = {
    async up(queryInterface, Sequelize) {
        let productos = index().map(products => Object({
            id: products.id,
            tittle: products.tittle,
            shortDescription: products.shortDescription,
            longDescription: products.longDescription,
            days: products.days,
            nights: products.nights,
            stars: products.stars,
            base: products.base,
            excursion: products.excursion,
            transfer: products.transfer,
            category: products.category,
            flights: products.flights,
            regionId: products.regionId,
            status: products.status,
            salesPrice: products.salesPrice,
            creatorId: products.creatorId
        }))
        await queryInterface.bulkInsert("products", productos, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};