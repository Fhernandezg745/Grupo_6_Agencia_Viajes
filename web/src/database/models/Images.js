module.exports = (sequelize, DataTypes) => {
  let alias = "images";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };
  let config = {
    timestamps: false,
    deletedAt: false,
    createdAt: false,
    updatedAt: false,
  };

  const Images = sequelize.define(alias, cols, config);

  Images.associate = function (models) {
    Images.hasOne(models.user, {
      foreignKey: "avatar",
    });
    Images.belongsToMany(models.products, {
      through: "ImagesProducts",
      foreignKey: "image",
      otherKey: "product",
    });
  };
  return Images;
};
