const controller = {
    home: (req, res) => {
        return res.render("home");
    },
    register: (req, res) => {
        return res.render("users/register");
    },
    login: (req, res) => {
        return res.render("users/login");
    },
    details: (req, res) => {
        return res.render("products/details");
    },
    carrito: (req, res) => {
        return res.render("products/carrito");
    },
    productList: (req, res) => {
        return res.render("products/productList");
    },
    createProducts: (req, res) => {
        return res.render("products/createProducts");
    },
    editProduct: (req, res) => {
        return res.render("products/editProduct");
    },
};

module.exports = controller;