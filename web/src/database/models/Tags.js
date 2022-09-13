module.exports = (sequelize, DataTypes) => {
  let alias = "tags";
  let cols = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tags: {
      type: DataTypes.STRING,
    },
  };
  let config = {
    timestamps: false,
    deletedAt: false,
    createdAt: false,
    updatedAt: false,
  };

  const tags = sequelize.define(alias, cols, config);

  tags.associate = function (models) {
    tags.belongsToMany(models.products, {
      through: "tagsProducts",
      foreignKey: "tagId",
      otherKey: "productId",
    });
  };

  return tags;
};
