const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>
{
    let alias = "position";
    let cols = {
        id:{
            allowNull:false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER
        },
        role:{
            type:DataTypes.STRING
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Position = sequelize.define(alias,cols,config);
    return Position
}