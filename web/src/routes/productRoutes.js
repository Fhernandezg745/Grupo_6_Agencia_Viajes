const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/productList", productsController.index);

router.get("/createProducts", productsController.createProducts);

router.get("/details/:id", productsController.detail);

router.get("/editProduct", productsController.editProduct);

router.get("/carrito", productsController.carrito);

module.exports = router;