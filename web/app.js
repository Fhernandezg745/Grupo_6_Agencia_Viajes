//Require de librerias, frameworks, etc.

const { path, resolve } = require("path");
const express = require("express");
const app = express();
const { port, callback } = require("./src/modules/port");
const method = require("method-override");

//seteo carpeta public como static
app.use(require("./src/modules/public"));
app.use(require("./src/modules/uploads"));

// seteo de EJS
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "./src/views"));

// rutas
app.use(require("./src/routes/mainRoutes"));
app.use("/user", require("./src/routes/usersRoutes"));
app.use("/products", require("./src/routes/productRoutes"));

// seteo de CRUD
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(method("_method"));

//levanto servidor
app.listen(port, () =>
    console.log(`Abriendo el servidor http://localhost:${port}`)
);