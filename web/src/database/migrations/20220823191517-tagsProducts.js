'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tagsProducts', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            product: {
                type: Sequelize.INTEGER,
                references: {
                    model: product,
                    key: 'id'
                }
            },
            tags: {
                type: Sequelize.INTEGER,
                references: {
                    model: tags,
                    key: 'id'
                }
            },
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tagsProducts');

    }
};