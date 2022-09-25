const { user, images } = require('../../database/models');
const { Op } = require('sequelize');
const { hashSync } = require('bcryptjs');

const userApi = {
    all: async(req, res) => {
        try {
            let users = await user.findAll({
                include: { all: true }
            });
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    oneUser: async(req, res) => {
        try {
            let userDB = await user.findByPk(req.params.id, {
                include: { all: true }
            })
            if (userDB) {
                return res.status(200).json(userDB)
            } else {
                return res.status(404).json(userDB)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    process: async(req, res) => {
        try {
            req.body.password = hashSync(req.body.password, 10)
            req.body.isAdmin = req.body.email.includes('@ht.com') ? true : false
            let newUser = await user.create(req.body);
            if (newUser) {
                return res.status(200).json(newUser)
            } else {
                return res.status(404).json(newUser)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    userDelete: async(req, res) => {
        try {
            let userToDelete = user.findByPk(req.params.id);
            if (!userToDelete) {
                return res.status(404).json("No such user")
            }
            let userDeleted = await userToDelete.destroy()
            if (userDeleted) {
                return res.status(200).json(true)
            } else {
                return res.status(500).json(false)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }
};

module.exports = userApi;