module.exports = (sequelize, DataTypes) => {
    let alias = "regions";
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

    const regions = sequelize.define(alias, cols, config);
    regions.associate = function(models) {
        regions.hasMany(models.products, {
            as: "regionProduct",
            foreignKey: "regionId"
        });
    };
    return regions;
};