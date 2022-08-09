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
                (product) => product.highLighted == "true"
            ),
            bestSellerSection: index().filter(
                (product) => product.bestSeller == "true"
            ),
        });
    },
    info: (req, res) => {
        return res.render("info", {
            title: "Info",
        });
    }
};

module.exports = mainController;