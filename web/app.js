const { path, resolve } = require("path");
const express = require("express");
const app = express();
const { port, callback } = require("./src/modules/port");

const public = resolve(__dirname, "./public");
app.use(express.static(public));

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "./src/views"));

const mainRoutes = require("./src/routes/mainRoutes");
const productRoutes = require("./src/routes/productRoutes");
const usersRoutes = require("./src/routes/usersRoutes");

app.use("/user", usersRoutes);
app.use("/", mainRoutes);
app.use("/products", productRoutes);

app.listen(port, () =>
  console.log(`Abriendo el servidor http://localhost:${port}`)
);
