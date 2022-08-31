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
    flights: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    image: {
      type: DataTypes.INTEGER,
      allowNull: true,
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

  products.associate = function (models) {
    products.belongsToMany(models.images, {
      through: "ImagesProducts",
    });
    products.belongsToMany(models.tags, {
      foreignKey: "tags",
      as: "productId",
      through: "tagsProducts",
    });
    products.belongsTo(models.user, {
      through: "usersProducts",
    });
    products.hasOne(models.region, {
      foreignKey: "regionId",
    });
  };
  return products;
};
