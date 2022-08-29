module.exports = (sequelize, DataTypes) => {
    let alias = "position";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: DataTypes.STRING
        }
    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const Position = sequelize.define(alias, cols, config);
    return Position
}