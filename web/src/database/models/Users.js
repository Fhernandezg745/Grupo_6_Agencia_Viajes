module.exports = (sequelize, DataTypes) => {
    let alias = "user";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        birthDate: {
            type: DataTypes.DATE
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    }
    let config = {
        timestamps: false,
        deletedAt: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.images, {
            foreignKey: 'avatar'
        })
        User.belongsToMany(models.products, {
            through: 'usersProducts',
            foreignKey: 'id',
            otherKey: 'id',
            timestamps: false,
            createdAt: false
        })
    }

    return User
}