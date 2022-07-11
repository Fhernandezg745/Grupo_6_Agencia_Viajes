const { path, resolve } = require("path");
const express = require("express");
const server = express();
const { port } = require("./src/modules/port");

const public = resolve(__dirname, "./public");
server.use(express.static(public));

server.set("view engine", "ejs");
server.set("views", resolve(__dirname, "./src/views"));

const mainRoutes = require("./src/routes/mainRoutes");
const productRoutes = require("./src/routes/productRoutes");

server.use("/", mainRoutes);
server.use("/products", productRoutes);

server.listen(port, () =>
  console.log(`Abriendo el servidor http://localhost:${port}`)
);
