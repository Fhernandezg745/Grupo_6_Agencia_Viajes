const {
    index,
    one,
    create,
    write,
    search,
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

        req.body.image = req.files[0].filename;
        let newUser = create(req.body)
        let users = index();
        users.push(newUser)
        write(users)
        return res.redirect('/users/login?msg="El registro fue exitos"')
    },
    save: (req, res) => {
        req.body.avatar = req.files[0].filename;
        let newUser = create(req.body);
        let user = index();
        user.push(newUser);
        write(user);
        return res.redirect("/");
    },
    login: (req, res) => {
        return res.render("users/login");
    },
    logged: (req, res) => {
        return res.render("users/logged");
    },
};

module.exports = usersController;