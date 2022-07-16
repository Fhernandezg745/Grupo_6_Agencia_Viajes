const productData = [];

const productController = {
  productList: (req, res) => {
    return res.render("products/productList");
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
