const {Router} = require("express");
const router = Router();

const {register, process, login, access, logged, logout, forgotPass,changePass,resetPass,newPass,forgotPassMessage,succesPassRecover,errorPassRecover} = require("../controllers/usersController");
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

router.get('/forgotPass', forgotPass)
router.get('/forgotPassMessage', forgotPassMessage)
router.post('/recover', changePass)


router.get('/resetPassword',resetPass)
router.post('/newPass',newPass)

router.get('/succesPassRecover', succesPassRecover)
router.get('/errorPassRecover', errorPassRecover)

module.exports = router;