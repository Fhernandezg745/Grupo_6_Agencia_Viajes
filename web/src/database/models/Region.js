const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>
{
    let alias = "region";
    let cols = {
        id:{
            allowNull:false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER
        },
        region:{
            type:DataTypes.STRING
        },
        countries:{
            type:DataTypes.STRING
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Region = sequelize.define(alias,cols,config);
    return Region
}