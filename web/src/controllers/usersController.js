const {
  index,
  one,
  create,
  write,
  search,
} = require("../models/users.model");


const usersController =  {
    register: (req, res) => {
      return res.render("users/register", {
        title: "Register",
      });
    },
    save: (req, res) => {
        req.body.image = req.files[0].filename;
        let newUser = create(req.body);
        let user = index();
        user.push(newUser);
        write(user);
        return res.redirect("/users/logged");
    },
    login: (req, res) => {
      return res.render("users/login");
    },
    logged: (req, res) => {
      return res.render("users/logged"); 
    },
  };
  
  module.exports = usersController;