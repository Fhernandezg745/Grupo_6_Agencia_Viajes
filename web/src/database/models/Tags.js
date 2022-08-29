module.exports = (sequelize, DataTypes) => {
    let alias = "tags";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER
        },
        tags: {
            type: DataTypes.STRING
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Tags = sequelize.define(alias, cols, config);
    return Tags
}