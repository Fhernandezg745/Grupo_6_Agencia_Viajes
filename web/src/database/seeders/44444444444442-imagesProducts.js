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
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('ImagesProducts', null, {});

    }
};