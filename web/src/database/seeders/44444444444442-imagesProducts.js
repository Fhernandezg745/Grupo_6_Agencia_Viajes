'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ImagesProducts', [{
                product: 1,
                image: 1
            },
            {
                product: 2,
                image: 2
            },
            {
                product: 3,
                image: 3
            },
            {
                product: 4,
                image: 4
            },
            {
                product: 5,
                image: 5
            },
            {
                product: 6,
                image: 6
            },
            {
                product: 7,
                image: 7
            },
            {
                product: 8,
                image: 8
            },
            {
                product: 9,
                image: 9
            },
            {
                product: 10,
                image: 10
            },
            {
                product: 11,
                image: 11
            },
            {
                product: 12,
                image: 12
            },
            {
                product: 13,
                image: 13
            },
            {
                product: 14,
                image: 14
            },
            {
                product: 15,
                image: 15
            },
            {
                product: 16,
                image: 16
            },
            {
                product: 17,
                image: 17
            },
            {
                product: 18,
                image: 18
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('ImagesProducts', null, {});

    }
};