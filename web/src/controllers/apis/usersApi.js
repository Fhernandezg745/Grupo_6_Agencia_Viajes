const { user, images } = require('../../database/models');
const { Op } = require('sequelize');
const { hashSync } = require('bcryptjs');

const userApi = {
    all: async(req, res) => {
        try {
            let page = 0;
            
            if (req.query.offset) {
                page = parseInt(req.query.offset);
            }

            let usersDB = await user.findAll({
                include: { all: true },
                limit: 10,
                offset: page,
                order: [['id', 'ASC']]
            });

            let data = {};
            data.usersTotal = await user.count();
            data.users = usersDB.map(user => Object({
                id : user.id,
                url : 'http://localhost:3002/users/pending?/' + user.id, //Crear vista de perfil de usuario?
                avatar : 'http://localhost:3002/avatars/' + user.avatar, //arreglar relación de avatar de usuario
                name : user.name,
                lastName : user.lastName,
                email : user.email,
                birthDate : user.birthDate,
            }));
            return res.status(200).json({ next: data.users.length> 0 ? 'http://localhost:3002/api/users?offset=' + (page + 10) : null, data });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    oneUser: async(req, res) => {
        try {
            let userDB = await user.findByPk(req.params.id, {
                include: { all: true }
            })
            if (userDB) {
                let data = {};
                data.id = userDB.id;
                data.url = 'http://localhost:3002/users/pending?/' + userDB.id;
                data.avatar = 'http://localhost:3002/avatars/' + userDB.avatar;
                data.name = userDB.name;
                data.lastName = userDB.lastName;
                data.email = userDB.email;
                data.birthDate = userDB.birthDate.toDateString("DD/MM/YYYY");
                return res.status(200).json(data)
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