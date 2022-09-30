const { body } = require('express-validator');
const { extname, resolve } = require('path')
const { unlinkSync } = require('fs')
const { user } = require('../database/models/index')
const register = [
    body('firstName').notEmpty().bail().isLength({ min: 2 }).bail(),
    body('lastName').notEmpty().bail().isLength({ min: 2 }).bail(),
    body('email').notEmpty().bail().isEmail().bail().custom(async(value) => {
        let users = await user.findAll()
        users = users.map(u => u.email)
        if (users.includes(value)) {
            throw new Error('El email ya esta registrado')
        }
        return true
    }),
    body('password').notEmpty().bail().isLength({ min: 8 }).bail()
    /* body('avatar').custom((value, { req }) => {
         let archivos = req.files
         if (!archivos || archivos.length == 0) {
             throw new Error('No se subio ninguna imagen')
         }
         let extensiones = ['.svg', '.png', '.jpg', '.jpeg']
         let avatar = archivos[0]
         let extension = extname(avatar.filename)

         if (!extensiones.includes(extension)) {
             unlinkSync(resolve(__dirname, '../../public/assets/', 'avatars', avatar.filename))
             throw new Error('La imagen no tiene una extension valida')
         }

         if (avatar.size > 2097152) {
             unlinkSync(resolve(__dirname, '../../public/assets/', 'avatars', avatar.filename))
             throw new Error('La imagen supera el peso de 2MB')
         }

         return true
     }) */

]

module.exports = register;