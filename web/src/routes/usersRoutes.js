const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const middlewaresUser = require('../middlewares/register');
const middlewareLogin = require('../middlewares/login');
const isLogged = require("../middlewares/isLogged");
const isAdmin = require("../middlewares/isAdmin");

const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("users") });


router.get("/register", usersController.register);
router.post("/save", middlewaresUser, usersController.process);
router.get("/login", usersController.login);
router.post("/access", middlewareLogin, usersController.access);
router.get("/logout", isLogged, usersController.logout);
router.get("/logged", isLogged, usersController.logged);



module.exports = router;