'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usersProducts', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            product: {
                type: Sequelize.INTEGER,
                references: {
                    model: products,
                    key: 'id'
                }
            },
            user: {
                type: Sequelize.INTEGER,
                references: {
                    model: user,
                    key: 'id'
                }
            },
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('usersProducts');

    }
};