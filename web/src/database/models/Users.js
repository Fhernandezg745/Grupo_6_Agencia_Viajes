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
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        avatarId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    }
    let config = {
        timestamps: false,
        deletedAt: false,
        createdAt: false,
        updatedAt: false

    };

    const user = sequelize.define(alias, cols, config);

    user.associate = function(models) {
        user.belongsTo(models.images, {
            as: 'avatarImg',
            foreignKey: 'avatarId'
        })
        user.hasMany(models.products, {
            as: "userProduct",
            foreignKey: "creatorId",
        });


    }

    return user
}