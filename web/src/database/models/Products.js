const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    let alias = "products";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER
        },
        tittle: {
            type: DataTypes.STRING
        },
        shortDescription: {
            type: DataTypes.TEXT
        },
        longtDescription: {
            type: DataTypes.TEXT,
        },
        days: {
            type: DataTypes.INTEGER
        },
        nights: {
            type: DataTypes.INTEGER
        },
        stars: {
            type: DataTypes.INTEGER
        },
        base: {
            type: DataTypes.INTEGER
        },
        excursion: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        transfer: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        flights: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        image: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        region_id: {
            type: DataTypes.INTEGER
        },
        salesPrice: {
            type: DataTypes.FLOAT
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Products = sequelize.define(alias, cols, config);
    return Products
}