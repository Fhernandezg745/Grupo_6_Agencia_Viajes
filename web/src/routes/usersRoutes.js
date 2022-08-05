const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const middlewaresUser = require('../middlewares/register');
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("users") });



router.get("/register", usersController.register);

router.post("/save", middlewaresUser, usersController.process);

router.get("/login", usersController.login);

router.get("/logged", usersController.logged);


module.exports = router;