const {
    user
} = require("../database/models/index");

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
        req.body.password = hashSync(req.body.password, 10)
        req.body.position = String(req.body.position).toLocaleLowerCase().includes('admin');

        await User.create(req.body);

        req.body.avatar = req.files[0].filename;
        let newUser = create(req.body)
        let users = index();
        users.push(newUser)
        write(users)
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
        let user = users.find(u => u.email === req.body.email)
        req.session.user = user
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
    },
    createProduct: function(req, res) {
        return res.render('products/createProducts', {
            title: "Crear producto",
        });
    },
    editProduct: function(req, res) {
        return res.render('products/editProduct', {
            title: "Editar producto",
        });
    },
};

module.exports = usersController;