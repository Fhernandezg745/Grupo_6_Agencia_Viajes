const controller = {
    home: (req, res) => {
        return res.render("home");
    },
    register: (req, res) => {
        return res.render("register");
    },
    login: (req, res) => {
        return  res.render("login");
    },
    details: (req, res) => {
        return res.render("details");
    },
    carrito: (req, res) => {
        return  res.render("carrito");
    },

}

module.exports = controller;