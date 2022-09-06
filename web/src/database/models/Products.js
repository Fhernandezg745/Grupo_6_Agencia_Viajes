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
            allowNull: true,
            defaultValue: 7,
        },
        nights: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 7,
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 4,
        },
        base: {
            type: DataTypes.STRING,
        },
        excursion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        transfer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        category: {
            type: DataTypes.STRING,
        },
        flights: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        regionId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
        },
        salesPrice: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0,
        },
        creatorId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        createdAt: false,
        updatedAt: false
    };

    const products = sequelize.define(alias, cols, config);

    products.associate = function(models) {
        products.belongsToMany(models.images, {
            through: "ImagesProducts",
            foreignKey: 'image',
            otherKey: 'product'
        });
        products.belongsToMany(models.tags, {
            through: "tagsProducts",
        });
        products.belongsTo(models.user, {
            as: "productoUser",
            foreignKey: "creatorId"
        });
        products.belongsTo(models.region, {
            as: "productoRegion",
            foreignKey: "regionId"
        });
    };
    return products;
};