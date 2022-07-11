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
  carrito: (req, res) => {
    return res.render("products/carrito");
  },
};

module.exports = controller;
