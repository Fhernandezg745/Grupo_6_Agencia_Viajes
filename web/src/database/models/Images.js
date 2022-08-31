module.exports = (sequelize, DataTypes) => {
    let alias = "images";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        images: {
            type: DataTypes.STRING
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Images = sequelize.define(alias, cols, config);

    Images.associate = function(models) {
        Images.hasOne(models.user, {
            foreignKey: 'imagesId'
        });
        Images.belongsToMany(models.products, {
            through: 'ImagesProducts'
        })
    }
    return Images
}