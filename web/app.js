//Require de librerias, frameworks, etc.

const { resolve } = require("path");
const express = require("express");
const app = express();
const { port } = require("./src/modules/port");
const method = require('method-override');
const session = require('express-session')
const cors = require('cors');

//levanto servidor
app.listen(port, () =>
    console.log(`Abriendo el servidor http://localhost:${port}`)
);

//seteo carpeta public como static
app.use(require("./src/modules/public"));
app.use(require("./src/modules/uploads"));

// seteo de EJS
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "./src/views"));


// seteo de CRUD
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(method('_method'));
app.use(session({
    secret: 'nodejs',
    saveUninitialized: true,
    resave: true
}))
app.use(cors());
app.use(require('./src/middlewares/user'));
// req.session

// rutas
app.use("/", require("./src/routes/mainRoutes"));
app.use("/products", require("./src/routes/productRoutes"));
app.use("/users", require("./src/routes/usersRoutes"));

//APIS
app.use('/api/users', require('./src/routes/apis/usersApi.routes'))