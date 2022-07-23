const { index, one, create, write } = require("../models/product.model");

const productController = {
  index: (req, res) => {
    return res.render("products/productList", {
      title: "Product List",
      products: index(),
    });
  },
  detail: (req, res) => {
    let product = one(parseInt(req.params.id));

    if (!product) {
      return res.redirect("/");
    }
    return res.render("products/details", {
      title: "Product Details",
      product: product,
    });
  },
  createProducts: (req, res) => {
    return res.render("products/createProducts", {
      title: "Create Products",
    });
  },
  save: (req, res) => {
    req.body.image = req.files[0].filename;
    let newProduct = create(req.body);
    let product = index();
    product.push(newProduct);
    write(product);
    return res.redirect("/products/productList");
  },
  editProduct: (req, res) => {
    return res.render("products/editProduct");
  },
  carrito: (req, res) => {
    return res.render("products/carrito");
  },
};
module.exports = productController;
