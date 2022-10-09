module.exports = (sequelize, DataTypes) => {
    let alias = "resetTokens";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
              type: DataTypes.STRING
        },
        token: {
            type: DataTypes.STRING
        },
        expiration:{
            type: DataTypes.DATE
        },
        used: {
            type: DataTypes.INTEGER,
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false,
        createdAt: false,
        updatedAt: false

    };

    const resetTokens = sequelize.define(alias, cols, config);

    return resetTokens
}