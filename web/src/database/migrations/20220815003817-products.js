'use strict';

module.exports = {
<<<<<<< HEAD
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tittle: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      longDescription: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.INTEGER
      },
      nights: {
        type: Sequelize.INTEGER
      },
      stars: {
        type: Sequelize.INTEGER
      },
      base: {
        type: Sequelize.STRING
      },
      excursion: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      transfer: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      flights: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      image: {
        type: Sequelize.STRING
      },
      regionId: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING
      },
      salesPrice: {
        type: Sequelize.FLOAT
      },
      tags: {
        type: Sequelize.STRING
      }
    });
  },
=======
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tittle: {
                type: Sequelize.STRING
            },
            shortDescription: {
                type: Sequelize.STRING
            },
            longDescription: {
                type: Sequelize.STRING
            },
            days: {
                type: Sequelize.INTEGER
            },
            nights: {
                type: Sequelize.INTEGER
            },
            stars: {
                type: Sequelize.INTEGER
            },
            base: {
                type: Sequelize.INTEGER
            },
            excursion: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            transfer: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            flights: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            image: {
                type: Sequelize.STRING
            },
            region: {
                type: Sequelize.INTEGER
            },
            salesPrice: {
                type: Sequelize.FLOAT
            }
        });
    },
>>>>>>> refs/remotes/origin/sprint6

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('products');
    }
};