const { index } = require("../models/product.model");

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
};

module.exports = mainController;