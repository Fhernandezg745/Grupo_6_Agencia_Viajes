module.exports = (sequelize, DataTypes) => {
    let alias = "imagesProducts";
    let cols = {
        product: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false,
        deleteAt: false,
        createdAt: false,
        updatedAt: false
    };

    const imagesProducts = sequelize.define(alias, cols, config);
    return imagesProducts
}