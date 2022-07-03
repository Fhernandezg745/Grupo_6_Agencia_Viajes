const path = require("path");
const express = require("express");
const server = express();
const public = path.resolve(__dirname, "./public");
const port = process.env.PORT || 3002;
const mainRoutes = require("./routes/mainRoutes");

server.use(express.static(public));

server.set("view engine", "ejs");

server.use("/", mainRoutes);

server.listen(port, () =>
  console.log(`Abriendo el servidor http://localhost:${port}`)
);

