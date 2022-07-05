const express = require("express");
const router = express.Router();

const mainController = require("../../src/controllers/mainControllers");

router.get("/", mainController.home);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

router.get("/details", mainController.details);

router.get("/carrito", mainController.carrito);

router.get("/createProducts", mainController.createProducts);

router.get("/editProduct", mainController.editProduct);

module.exports = router;