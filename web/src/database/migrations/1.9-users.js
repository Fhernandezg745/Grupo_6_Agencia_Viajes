'use strict';


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            birthDate: {
                type: Sequelize.DATE
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            isAdmin: {
                type: Sequelize.BOOLEAN
            },
            avatarId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references:{
                    model:'images',
                    key:'id'
                }
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};