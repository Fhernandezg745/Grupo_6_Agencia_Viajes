const { index } = require("../models/product.model");

const productController = {
  productList: (req, res) => {
    return res.render("products/productList", {
      title: "Product List",
      products: index(),
    });
  },
  createProducts: (req, res) => {
    return res.render("products/createProducts");
  },
  editProduct: (req, res) => {
    return res.render("products/editProduct");
  },
  details: (req, res) => {
    return res.render("products/details");
  },
  carrito: (req, res) => {
    return res.render("products/carrito");
  },
};
module.exports = productController;
