'use strict';

module.exports = {
<<<<<<< HEAD
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
    {
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
      nationalID: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.INTEGER
      },
      positionId: {
        type: Sequelize.INTEGER,
      },
    });
  },
=======
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
            nationalID: {
                type: Sequelize.STRING
            },
            birthDate: {
                type: Sequelize.DATE
            },
            gender: {
                type: Sequelize.STRING
            },
            phoneNumber: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            zipCode: {
                type: Sequelize.STRING
            },
<<<<<<< HEAD
            password: {
                type: Sequelize.STRING
            },
            avatar: {
                type: Sequelize.INTEGER
            },
            positionId: {
                type: Sequelize.INTEGER,
=======
            city: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.TEXT
            },
            avatar: {
                type: Sequelize.TEXT
            },
            position: {
                type: Sequelize.STRING
>>>>>>> 84ea404 (algo)
            },
        });
    },
>>>>>>> refs/remotes/origin/sprint6

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};