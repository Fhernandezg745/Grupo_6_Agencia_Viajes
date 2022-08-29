const { index } = require("../models/product.model");
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("products") });

const mainController = {
    home: (req, res) => {
        return res.render("home", {
            title: "Home",
            products: index(),
            highlightedSection: index().filter(
                (product) => product.status == "highLighted"
            ),
            bestSellerSection: index().filter(
                (product) => product.status == "bestSeller"
            ),
        });
    },
    info: (req, res) => {
        return res.render("info", {
            title: "Info",
        });
    },
    us: (req, res) => {
        return res.render("us", {
            title: "us",
        });
    }
};

module.exports = mainController;