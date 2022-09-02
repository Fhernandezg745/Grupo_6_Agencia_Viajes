module.exports = (sequelize, DataTypes) => {
    let alias = "products";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        tittle: {
            type: DataTypes.STRING,
        },
        shortDescription: {
            type: DataTypes.STRING,
        },
        longDescription: {
            type: DataTypes.TEXT,
        },
        days: {
            type: DataTypes.INTEGER,
        },
        nights: {
            type: DataTypes.INTEGER,
        },
        stars: {
            type: DataTypes.INTEGER,
        },
        base: {
            type: DataTypes.STRING,
        },
        excursion: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        transfer: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        category: {
            type: DataTypes.STRING,
        },
        flights: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            references:{
                model: 'images',
                key: 'images',
            }
        },
        regionId: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
        salesPrice: {
            type: DataTypes.FLOAT,
        },
        tags: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const products = sequelize.define(alias, cols, config);

    products.associate = function(models) {
        products.belongsToMany(models.images, {
            through: "ImagesProducts",
            foreignKey: "id",
            otherKey: "imageId",
        });
        products.belongsToMany(models.tags, {
            foreignKey: "tags",
            as: "productId",
            through: "tagsProducts",
        });
        products.belongsToMany(models.user, {
            through: "usersProducts",
            foreignKey: "id",
            otherKey: 'id',
            timestamps: false,
            createdAt: false
        });
        products.hasOne(models.region, {
            otherKey: "regionId",
        });
    };
    return products;
};