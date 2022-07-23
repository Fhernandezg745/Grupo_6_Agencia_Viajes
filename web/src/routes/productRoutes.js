const express = require("express");
const router = express.Router();
const { extname } = require("path");
const productsController = require("../controllers/productsController");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.get("/productList", productsController.index);

router.get("/createProducts", productsController.createProducts);
router.post("/save", [upload.any()], productsController.save);

router.get("/details/:id", productsController.detail);

router.get("/editProduct", productsController.editProduct);

router.get("/carrito", productsController.carrito);

module.exports = router;
