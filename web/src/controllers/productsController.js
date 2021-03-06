const {
    index,
    one,
    create,
    write,
    search,
} = require("../models/product.model");

const productController = {
    index: (req, res) => {
        return res.render("products/productList", {
            title: "Product List",
            products: index(),
        });
    },
    // filtro: (req, res) => {
    //   let category = req.params.category;
    //   let param = req.params.param;
    //   let product = search(category, param);
    //   return res.render("products/productList", {
    //     title: "Product Filter",
    //     product: product,
    //   });
    // },
    detail: (req, res) => {
        let product = one(parseInt(req.params.id));
        if (!product) {
            return res.redirect("/products/productList");
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
        let product = one(parseInt(req.params.id));
        if (!product) {
            return res.redirect("/products/productList");
        }
        return res.render("products/editProduct", {
            title: "Edit Product",
            product: product,
        });
    },
    modify: (req, res) => {
        let product = one(parseInt(req.params.id));
        let products = index();
        let productsModified = products.map((prod) => {
            if ( prod.productId == product.id ) {
                prod.tittle = req.body.tittle,
                    prod.shortDescription = req.body.shortDescription,
                    prod.longDescription = req.body.longDescription,
                    prod.nights = req.body.nights,
                    prod.days = req.body.days,
                    prod.stars = req.body.stars,
                    prod.flights = req.body.flights,
                    prod.transfers = req.body.transfers,
                    prod.price = parseInt(req.body.price),
                    prod.base = req.body.base,
                    prod.category = req.body.category,
                    prod.image = req.files && req.files.length > 0 ? req.files[0].filename : prod.image,
                    prod.published = req.body.published,
                    prod.region = req.body.region,
                    prod.highLighted = req.body.highLighted,
                    prod.bestSeller = req.body.bestSeller,
                    prod.tags = req.body.tags;
            }
            return prod;
        });
        write(productsModified);
        return res.redirect("products/details/" + product.productId);
    },
    cart: (req, res) => {
        return res.render("products/cart");
    },
    deleteProduct: (req, res) => {
        let productToDelete = one(parseInt(req.params.id));
        let products = index();
        let productDeleted = products.filter(function(product) {
            return product.id !== productToDelete.id;
        });
            write(productDeleted);
            return res.redirect("products/productList");
    },
};
module.exports = productController;