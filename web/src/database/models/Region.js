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
  };

  const Region = sequelize.define(alias, cols, config);
  Region.associate = function (models) {
    Region.belongsTo(models.products, {
      as: "regionId",
      foreignKey: "id",
    });
  };
  return Region;
};
