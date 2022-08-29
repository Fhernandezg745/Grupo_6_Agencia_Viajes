module.exports = (sequelize, DataTypes) => {
    let alias = "images";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER
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
    return Images
}