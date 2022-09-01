const {
    user,
    images
} = require("../database/models/index");
const { hashSync } = require('bcryptjs');

const { validationResult } = require("express-validator")

const usersController = {
    register: async(req, res) => {
        return res.render("users/register", {
            title: "Register",
        });
    },
    process: async(req, res) => {
        let validaciones = validationResult(req)
        let { errors } = validaciones
        if (errors && errors.length > 0) {
            return res.render('users/register', {
                styles: ['forms'],
                oldData: req.body,
                errors: validaciones.mapped()
            });
        }
        req.body.password = hashSync(req.body.password, 10);
        req.body.isAdmin = String(req.body.email).toLocaleLowerCase().includes('@ht');

        if (req.files && req.files.length > 0) {
            let avatar = await images.create({
                images: req.files[0].filename
            })

            req.body.avatar = avatar.id;
        }

        await user.create(req.body);


        //        codigo anterior
        /*        req.body.avatar = req.files[0].filename;
                let newUser = create(req.body)
                let users = index();
                users.push(newUser)
                write(users)*/
        return res.redirect("./login")
    },
    login: async(req, res) => {
        return res.render('users/login', {
            styles: ['forms']
        });
    },
    access: async(req, res) => {
        let validaciones = validationResult(req)
        let { errors } = validaciones
        if (errors && errors.length > 0) {
            return res.render('users/login', {
                styles: ['forms'],
                oldData: req.body,
                errors: validaciones.mapped()
            });
        }
        let users = await user.findAll();

        let userDB = users.find(u => u.email === req.body.email)
        req.session.user = userDB
        return res.redirect('/users/logged')
    },
    logout: function(req, res) {
        delete req.session.user
        return res.redirect('/')
    },
    logged: function(req, res) {
        return res.render('users/logged', {
            title: "Mi cuenta",
        });
    }
};

module.exports = usersController;