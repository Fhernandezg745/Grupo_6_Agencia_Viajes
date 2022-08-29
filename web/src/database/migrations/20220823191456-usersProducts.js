'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usersProducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('usersProducts');
    }
};