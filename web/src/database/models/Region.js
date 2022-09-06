module.exports = (sequelize, DataTypes) => {
    let alias = "region";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        region: {
            type: DataTypes.STRING,
        },
        countries: {
            type: DataTypes.STRING,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        createdAt: false,
        updatedAt: false
    };

    const region = sequelize.define(alias, cols, config);
    region.associate = function(models) {
        region.hasMany(models.products, {
            as: "regionProduct",
            foreignKey: "regionId"
        });
    };
    return region;
};