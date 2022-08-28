'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tags', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tags: {
                type: Sequelize.STRING
            }
        });
    },

<<<<<<< HEAD
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tags');
  }
};
=======
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tags');
    }
};
>>>>>>> refs/remotes/origin/sprint6
