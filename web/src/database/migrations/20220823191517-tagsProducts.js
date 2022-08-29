'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tagsProducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tagId: {
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.INTEGER
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tagsProducts');
    }
};