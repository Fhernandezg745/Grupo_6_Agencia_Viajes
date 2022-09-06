'use strict';

const { index } = require("../../models/product.model")

module.exports = {
  async up (queryInterface, Sequelize) {
    let region = [
      {id:1,
        region: "África"
      },
      {id:2,
        region: "Lejano Oriente"
      },
      {id:3,
        region: "Medio Oriente"
      },
      {id:4,
        region: "Islas del Pácifico Sur"
      },
      {id:5,
        region: "Islas del Índico"
      },
      {id:6,
        region: "Oceanía"
      },
      {id:7,
        region: "Sudeste Asíatico"
      }
    ];
    await queryInterface.bulkInsert("region", region,{});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
