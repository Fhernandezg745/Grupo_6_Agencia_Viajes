const path = require("path");
const express = require("express");
const server = express();
const public = path.resolve(__dirname, "./public");
const {port} = require("./src/modules/port")
const mainRoutes = require("./src/routes/mainRoutes");

server.use(express.static(public));

server.set("view engine", "ejs");

server.use("/", mainRoutes);

server.listen(port, () =>
  console.log(`Abriendo el servidor http://localhost:${port}`)
);

