const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

module.exports = {
  index: function () {
    let file = resolve(__dirname, "../data", "products.json");
    let data = readFileSync(file, "utf8");
    return JSON.parse(data);
  },
  // search: function (category, param) {
  //   let file = resolve(__dirname, "../data", "products.json");
  //   let data = readFileSync(file, "utf8");
  //   let products = JSON.parse(data);
  //   let result = products.forEach((product) => {
  //     if (product.category.toLowerCase().includes(param.toLowerCase()))
  //       return product;
  //   });
  // },
  one: function (id) {
    let file = resolve(__dirname, "../data", "products.json");
    let data = readFileSync(file, "utf8");
    let products = JSON.parse(data);
    return products.find((product) => product.productId === id);
  },
  create: function (data) {
    let file = resolve(__dirname, "../data", "products.json");
    let info = readFileSync(file, "utf8");
    let products = JSON.parse(info);
    let lastProduct = products[products.length - 1];
    return Object({
      productId: products.length == 0 ? 1 : lastProduct.productId + 1,
      tittle: data.tittle,
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
      nights: data.nights,
      days: data.days,
      stars: data.stars,
      flights: data.flights,
      transfers: data.transfers,
      price: parseInt(data.price),
      base: data.base,
      category: data.category,
      image: data.image,
      published: data.published,
      region: data.region,
      highlighted: data.highlighted,
      bestSeller: data.bestSeller,
      tags: data.tags,
    });
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "products.json");
    let info = JSON.stringify(data, null, 2);
    writeFileSync(file, info);
  },
};
