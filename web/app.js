//Require de librerias, frameworks, etc.

const { path, resolve } = require("path");
const express = require("express");
const app = express();
const { port, callback } = require("./src/modules/port");

//seteo carpeta public como static
const public = resolve(__dirname, "./public");
app.use(express.static(public));

// seteo de EJS
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "./src/views"));

// rutas
app.use(require("./src/routes/mainRoutes"));
app.use("/user", require("./src/routes/usersRoutes"));
app.use("/products", require("./src/routes/productRoutes"));

//

//levanto servidor
app.listen(port, () =>
  console.log(`Abriendo el servidor http://localhost:${port}`)
);
