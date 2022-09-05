'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tagsProducts', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            productId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            tagId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'tags',
                    key: 'id'
                }
            },
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tagsProducts');

    }
};