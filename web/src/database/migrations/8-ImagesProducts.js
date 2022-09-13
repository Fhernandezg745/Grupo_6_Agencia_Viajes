"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("ImagesProducts", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        product: {
          type: Sequelize.INTEGER,
          references: {
            model: "products",
            key: "id",
          },
          onDelete: "cascade",
        },
        image: {
          type: Sequelize.INTEGER,
          references: {
            model: "images",
            key: "id",
          },
          onDelete: "cascade",
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable("ImagesProducts");
    } catch (error) {
      console.log(error);
    }
  },
};
