'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('region', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            region: {
                type: Sequelize.STRING
            },
            countries: {
                type: Sequelize.STRING
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('region');
    }
};