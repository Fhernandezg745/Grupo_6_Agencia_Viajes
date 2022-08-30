'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ImagesProducts', [{
                products: 1,
                image: 1
            },
            {
                products: 2,
                image: 2
            },
            {
                products: 3,
                image: 3
            },
            {
                products: 4,
                image: 4
            },
            {
                products: 5,
                image: 5
            },
            {
                products: 6,
                image: 6
            },
            {
                products: 7,
                image: 7
            },
            {
                products: 8,
                image: 8
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('ImagesProducts', null, {});

    }
};