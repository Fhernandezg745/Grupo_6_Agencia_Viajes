const {Router} = require("express");
const router = Router();

const {register, process, login, access, logged, logout} = require("../controllers/usersController");
const middlewaresUser = require('../middlewares/register');
const middlewareLogin = require('../middlewares/login');
const isLogged = require("../middlewares/isLogged");
const isAdmin = require("../middlewares/isAdmin");

router.get("/register", register);
router.get("/login", login);
router.get("/logout", isLogged, logout);
router.get("/logged", isLogged, logged);
router.post("/save", middlewaresUser, process);
router.post("/access", middlewareLogin, access);

module.exports = router;