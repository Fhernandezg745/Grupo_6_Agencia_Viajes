const { products, images } = require("../database/models/index");
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("products") });

const mainController = {
  home: async (req, res) => {
    let productos = await products.findAll({ include: { all: true } });
    return res.render("home", {
      title: "Home",
      products: productos,
      highlightedSection: productos.filter(
        (product) => product.status == "highLighted"
      ),
      bestSellerSection: productos.filter(
        (product) => product.status == "bestSeller"
      ),
    });
  },
  info: (req, res) => {
    return res.render("info", {
      title: "Info",
    });
  },
  infoCovid: (req, res) => {
    return res.render("infoCovid", {
      title: "infoCovid",
    });
  },
  infoPassport: (req, res) => {
    return res.render("infoPassport", {
      title: "infoPassport",
    });
  },
  infoVaccine: (req, res) => {
    return res.render("infoVaccine", {
      title: "infoVaccine",
    });
  },
  infoVisa: (req, res) => {
    return res.render("infoVisa", {
      title: "infoVisa",
    });
  },
  infoDestination: (req, res) => {
    return res.render("infoDestination", {
      title: "infoDestination",
    });
  },
  us: (req, res) => {
    return res.render("us", {
      title: "us",
    });
  },
  notFound: (req, res) => {
    return res.status(404).render("404", {
      title: "Página no encontrada",
    });
  },
};

module.exports = mainController;
