const controller = {
    home: (req, res) => {
        return res.render("home");
    },
    register: (req, res) => {
        return res.render("users/register");
    },
    login: (req, res) => {
        return  res.render("users/login");
    },
    details: (req, res) => {
        return res.render("products/details");
    },
    carrito: (req, res) => {
        return  res.render("products/carrito");
    },
    createProducts: (req, res) => {
        return res.render("products/createProducts");
    },
}

module.exports = controller;