const { index, one } = require("../models/product.model");

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
        return res.render("products/createProducts");
    },
    editProduct: (req, res) => {
        return res.render("products/editProduct");
    },
    carrito: (req, res) => {
        return res.render("products/carrito");
    },
};
module.exports = productController;