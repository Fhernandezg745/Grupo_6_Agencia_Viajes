const { body } = require("express-validator");
const { user } = require('../database/models/index')
const { compareSync } = require("bcryptjs");

const login = [
    //Email
    body("email")
    .notEmpty()
    .bail()
    .isEmail()
    .bail()
    .custom(async(value) => {
        let users = await user.findAll()
        users = users.map(u => u.email)
        if (!users.includes(value)) {
            throw new Error("El email no está registrado")
        }
        return true;
    }),
    //Pass
    body("password")
    .notEmpty()
    .bail()
    .isLength({ min: 1 })
    .bail()
    .custom(async(value, { req }) => {
        let { email } = req.body
        let users = await user.findAll()
        let userDB = users.find(u => u.email === email);
        if (!userDB) {
            throw new Error("Usuario no encontrado")
        }
        if (!compareSync(value, userDB.password)) {
            throw new Error("la contraseña no coincide")
        }
        return true
    }),
];


module.exports = login