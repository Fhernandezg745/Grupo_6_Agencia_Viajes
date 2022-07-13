const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/productList", productsController.productList);

router.get("/createProducts", productsController.createProducts);

router.get("/details", productsController.details);

router.get("/editProduct", productsController.editProduct);

module.exports = router;
