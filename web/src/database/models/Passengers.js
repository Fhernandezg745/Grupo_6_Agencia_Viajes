module.exports = (sequelize, DataTypes) => {
    let alias = "passengers";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        nationalID: {
            type: DataTypes.STRING
        },
        birthDate: {
            type: DataTypes.DATE
        },
        gender: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        zipCode: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Passengers = sequelize.define(alias, cols, config);
    return Passengers
}