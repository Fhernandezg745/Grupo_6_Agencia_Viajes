module.exports = (sequelize, DataTypes) => {
    let alias = "tags";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
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

    Tags.associate = function(models) {
        Tags.hasMany(models.products, {
            foreignKey: 'id',
            through: 'tagsProducts'
        })
    }

    return Tags
}