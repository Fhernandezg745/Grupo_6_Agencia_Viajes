
const usersController =  {
    register: (req, res) => {
      return res.render("users/register");
    },
    login: (req, res) => {
      return res.render("users/login");
    },
    logged: (req, res) => {
      return res.render("users/logged"); 
    },
  };
  
  module.exports = usersController;