module.exports = (sequelize, DataTypes) => {
    let alias = "tagsProducts";
    let cols = {
        product: {
            type: DataTypes.INTEGER
        },
        tags: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false,
        deleteAt: false,
        createdAt: false,
        updatedAt: false
    };

    const tagsProducts = sequelize.define(alias, cols, config);
    return tagsProducts
}