const {
    index,
    create,
    write,
} = require("../models/users.model");

const { validationResult } = require("express-validator")

const usersController = {
    register: (req, res) => {
        return res.render("users/register", {
            title: "Register",
        });
    },
    process: function(req, res) {
        let validaciones = validationResult(req)
        let { errors } = validaciones
        if (errors && errors.length > 0) {
            return res.render('users/register', {
                styles: ['forms'],
                oldData: req.body,
                errors: validaciones.mapped()
            });
        }
        req.body.avatar = req.files[0].filename;
        let newUser = create(req.body)
        let users = index();
        users.push(newUser)
        write(users)
        return res.redirect("./login")
    },
    login: function(req, res) {
        return res.render('users/login', {
            styles: ['forms']
        });
    },
    access: function(req, res) {
        let validaciones = validationResult(req)
        let { errors } = validaciones
        if (errors && errors.length > 0) {
            return res.render('users/login', {
                styles: ['forms'],
                oldData: req.body,
                errors: validaciones.mapped()
            });
        }
        let users = index();
        let user = users.find(u => u.email === req.body.email)
        req.session.user = user
        return res.redirect('/')
    },
    logout: function(req, res) {
        delete req.session.user
        return res.redirect('/')
    }
};

module.exports = usersController;