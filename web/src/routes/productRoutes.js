const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("products") });



router.get("/productList", productsController.index);
// router.get("/productList/:category?/:param?", productsController.filtro);

router.get("/createProducts", productsController.createProducts);
router.post("/save", [upload.any()], productsController.save);

router.get("/details/:id", productsController.detail);

router.get("/editProduct/:id", productsController.editProduct);

router.put("/editProduct", [upload.any()], productsController.modify);

router.get("/cart/:id", productsController.cart);

router.delete("/products/delete/:id", function(req, res,) {
    res.send("test");
}); 

//router.delete("/delete/:id", productsController.deleteProduct);

module.exports = router;