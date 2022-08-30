const {
    products
} = require("../database/models/index");

const productController = {
    index: async(req, res) => {
        let productos = await products.findAll()
        return res.render("products/productList", {
            title: "Product List",
            products: productos,
        });
    },
    detail: async(req, res) => {
        let productDB = await products.findByPk(req.params.id);
        if (!productDB) {
            return res.redirect("/products/productList");
        }
        return res.render("products/details", {
            title: "Product Details",
            product: productDB,
        });
    },
    createProducts: async(req, res) => {
        return res.render("products/createProducts", {
            title: "Create Products",
        });
    },
    save: async(req, res) => {
        // req.body.image = req.files[0].filename;
        await products.create(req.body)
        return res.redirect("/products/productList");
    },
    editProduct: async(req, res) => {
        let productDB = await products.findByPk(req.params.id);
        if (!productDB) {
            return res.redirect("/products/productList");
        }
        return res.render("products/editProduct", {
            title: "Edit Product",
            product: productDB,
        });
    },
    modify: async(req, res) => {

        await products.update({
            tittle: req.body.tittle,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            days: req.body.days,
            nights: req.body.nights,
            stars: req.body.stars,
            base: req.body.base,
            excursion: req.body.excursion,
            transfers: req.body.transfers,
            flights: req.body.flights,
            region: req.body.region,
            status: req.body.status,
            salesPrice: parseFloat(req.body.salesPrice),
            tags: req.body.tags,
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.redirect("/products/details/" + req.params.id);
    },
    cart: async(req, res) => {
        let productDB = await products.findByPk(req.params.id);
        if (!productDB) {
            return res.redirect("/products/productList");
        }
        return res.render("products/cart", {
            title: "Cart Checkout",
            product: productDB,
        });
    },
    deleteProduct: async(req, res) => {
        let productDB = await products.findByPk(req.params.id);
        if (!productDB) {
            return res.redirect('/products/productList')
        }
        await products.destroy({
            where: {
                id: productDB.id
            }
        })
        return res.redirect("/products/productList");
    },
};
module.exports = productController;