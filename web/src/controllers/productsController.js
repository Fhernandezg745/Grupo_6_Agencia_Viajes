const {
    products,
    images,
    imagesProducts,
    tagsProducts,
    tags,
} = require("../database/models/index");

const productController = {
    index: async(req, res) => {
        let productos = await products.findAll();
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
        let newProduct = await products.create({
            tittle: req.body.tittle,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            days: req.body.days != '' ? parseInt(req.body.days) : null,
            nights: req.body.nights != '' ? parseInt(req.body.nights) : null,
            stars: req.body.stars != '' ? parseInt(req.body.stars) : null,
            base: req.body.base,
            excursion: req.body.excursion,
            category: req.body.category,
            transfers: req.body.transfers,
            regionId: req.body.regionId != '' ? parseInt(req.body.regionId) : null,
            flights: req.body.flights,
            status: req.body.status,
            salesPrice: req.body.salesPrice != '' ? parseInt(req.body.salesPrice) : null,
        });

        if (req.tags && req.tags.length > 0) {
            let newTags = await Promise.all(
                req.tags.split(" ").map((tag) => {
                    return tags.create({
                        tags: tag
                    });
                })
            );
            let addTagsProducts = await Promise.all(
                newTags.map((tagProduct) => {
                    return imagesProducts.create({
                        product: newProduct.id,
                        image: tagProduct.id,
                    });
                })
            )
        }

        if (req.files && req.files.length > 0) {
            let imagenes = await Promise.all(
                req.files.map((file) => {
                    return images.create({
                        images: file.filename,
                    });
                })
            );

            let addProductImages = await Promise.all(
                imagenes.map((image) => {
                    return imagesProducts.create({
                        product: newProduct.id,
                        image: image.id,
                    });
                })
            );


        }

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
        let productsDB = await products.findByPk(req.params.id);
        await productsDB.update({
            tittle: req.body.tittle,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            days: req.body.days,
            nights: req.body.nights,
            stars: req.body.stars,
            base: req.body.base,
            excursion: req.body.excursion,
            category: req.body.category,
            transfers: req.body.transfers,
            flights: req.body.flights,
            region: req.body.region,
            status: req.body.status,
            salesPrice: parseFloat(req.body.salesPrice),
        }, {
            where: {
                id: req.params.id,
            },
        });

        if (req.files && req.files.length > 0) {
            let imagenes = await Promise.all(
                req.files.map((file) => {
                    return images.update({
                        images: file.filename,
                    }, {
                        where: {
                            images: productsDB.image
                        }
                    });
                })
            );

            let addProductImages = await Promise.all(
                imagenes.map((image) => {
                    return imagesProducts.update({
                        image: image.id,
                    }, {
                        where: {
                            product: productsDB.id
                        }
                    });
                })
            );

        }

        await tagsProducts.update({
            tagId: tags.id,
        }, {
            where: {
                productId: productsDB.id
            }
        });

        await tags.update({
            tags: req.body.tags
        }, {
            where: {
                id: productsDB.tags
            }
        });

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
            return res.redirect("/products/productList");
        }
        await imagesProducts.destroy({
            where: {
                product: productDB.id
            }
        });

        await images.destroy({
            where: {
                images: productDB.image
            }
        });

        await tagsProducts.destroy({
            where: {
                productID: productDB.id
            }
        });

        await products.destroy({
            where: {
                id: productDB.id,
            },
        });
        return res.redirect("/products/productList");
    },
};
module.exports = productController;