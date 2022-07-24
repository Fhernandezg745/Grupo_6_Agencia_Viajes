const { index } = require("../models/product.model");

const mainController = {
  home: (req, res) => {
    return res.render("home", {
      title: "Home",
      products: index(),
      highlightedSection: index().filter(
        (product) => product.highlighted == "on"
      ),
      bestSellerSection: index().filter(
        (product) => product.bestSeller == "on"
      ),
    });
  },
};

module.exports = mainController;
