const productData = [
  {
    productId: 01,
    tittle: "Petra - Jordania (09 dias/ 08 noches)",
    shortDescription:
      "Itinerario/excursiones: Amman, Petra, Wadi Rum, Mar muerto",
    longDescription: "Descripcion larga",
    nights: 8,
    days: 9,
    flights: true,
    transfers: true,
    price: 100,
    base: "Doble",
    category: "exotico",
    image: "/assets/petra-jordania-600x400.jpeg",
    published: true,
    region: "Asia",
    highlighted: true,
    bestSeller: false,
  },
  {
    productId: 02,
    tittle: "Maravillas de China - Etnias (13 dias/ 12 noches)",
    shortDescription: "Itinerario/excursiones: Beijin, Xian, Guilin, Shanghai",
    longDescription: "Descripcion larga",
    nights: 12,
    days: 13,
    flights: true,
    transfers: true,
    price: 100,
    base: "Doble",
    category: "exotico",
    image: "/assets/great-wall-china-600x400.jpeg",
    published: true,
    region: "Asia",
    highlighted: true,
    bestSeller: false,
  },
];

const productController = {
  productList: (req, res) => {
    return res.render("products/productList");
  },
  createProducts: (req, res) => {
    return res.render("products/createProducts");
  },
  editProduct: (req, res) => {
    return res.render("products/editProduct");
  },
  details: (req, res) => {
    return res.render("products/details");
  },
  carrito: (req, res) => {
    return res.render("products/carrito");
  },
};
module.exports = productController;
