const {
  products,
  images,
  imagesProducts,
} = require("../database/models/index");

const productController = {
  index: async (req, res) => {
    let productos = await products.findAll();
    return res.render("products/productList", {
      title: "Product List",
      products: productos,
    });
  },
  detail: async (req, res) => {
    let productDB = await products.findByPk(req.params.id);
    if (!productDB) {
      return res.redirect("/products/productList");
    }
    return res.render("products/details", {
      title: "Product Details",
      product: productDB,
    });
  },
  createProducts: async (req, res) => {
    return res.render("products/createProducts", {
      title: "Create Products",
    });
  },
  save: async (req, res) => {
    let newProduct = await products.create(req.body);

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

      //          return res.send(images)
    }

    return res.redirect("/products/productList");
  },
  editProduct: async (req, res) => {
    let productDB = await products.findByPk(req.params.id);
    if (!productDB) {
      return res.redirect("/products/productList");
    }
    return res.render("products/editProduct", {
      title: "Edit Product",
      product: productDB,
    });
  },
  modify: async (req, res) => {
    let productsDB = await products.findByPk(req.params.id, {
      include: { all: true },
    });
    await productsDB.update(
      {
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
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.redirect("/products/details/" + req.params.id);
  },
  cart: async (req, res) => {
    let productDB = await products.findByPk(req.params.id);
    if (!productDB) {
      return res.redirect("/products/productList");
    }
    return res.render("products/cart", {
      title: "Cart Checkout",
      product: productDB,
    });
  },
  deleteProduct: async (req, res) => {
    let productDB = await products.findByPk(req.params.id);
    if (!productDB) {
      return res.redirect("/products/productList");
    }
    await products.destroy({
      where: {
        id: productDB.id,
      },
    });
    return res.redirect("/products/productList");
  },
};
module.exports = productController;
