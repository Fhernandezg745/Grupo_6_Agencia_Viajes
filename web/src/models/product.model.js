const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

module.exports = {
    index: function() {
        let file = resolve(__dirname, "../data", "products.json");
        let data = readFileSync(file, "utf8");
        return JSON.parse(data);
    },
    one: function(id) {
        let file = resolve(__dirname, "../data", "products.json");
        let data = readFileSync(file, "utf8");
        let products = JSON.parse(data);
        return products.find((product) => product.id === id);
    },
};