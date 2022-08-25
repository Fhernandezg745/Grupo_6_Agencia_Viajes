const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>
{
    let alias = "user";
    let cols = {
        id:{
            allowNull:false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER
        },
        firstName:{
            type:DataTypes.STRING
        },
        lastName:{
            type:DataTypes.TEXT
        },
        nationalID:{
            type:DataTypes.INTEGER,
        },
        birthDate:{
            type:DataTypes.DATE
        },
        gender:{
            type:DataTypes.STRING
        },
        phoneNumber:{
            type:DataTypes.STRING
        },
        address:{
            type:DataTypes.STRING
        },
        city:{
            type:DataTypes.STRING
        },
        country:{
            type:DataTypes.STRING
        },
        zipCode:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        position:{
            type:DataTypes.STRING
        },
        avatar:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        
        
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const User = sequelize.define(alias,cols,config);
    return User
}