// Comandos en la terminal para arrancar mi aplicación

npm init -y
npm i express ejs method-override multer
npm i -D nodemon
mkdir public assets css products users 
mkdir src views controllers routes modules includes models data
touch app.js main.routes.js main.controller.js
touch products.routes.js products.controller.js products.model.js products.json
touch users.routes.js users.controller.js users.model.js users.json
touch port.js public.js upload.js
touch login.ejs register.ejs home.ejs list.ejs detail.ejs create.ejs head.ejs header.ejs

// package.json
{
  "name": "crud",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.js",
  "scripts": {
    "test": "nodemon src/app.js -e json,js,mjs,ejs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "method-override": "^3.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.18"
  }
}





// Modulo Port.js

module.exports = { 
  port:process.env.PORT || 2020,
  start:() => console.log("Arrancando")
}

// Modulo Public.js
const { static } = require ('express');
const { resolve } = require ('path');
const public = resolve (__dirname, "../../public");
module.exports = static(public);

// Modulo Uploads.js
const {resolve} = require('path');
const {static} = require('express');
const uploads = resolve(__dirname,'../../uploads');
module.exports = static(uploads);

// Archivo App.js
const express = require("express")
const {resolve} = require('path')
const method = require('method-override')
const public = require("./modules/public")
const{port,start}=require("./modules/port")
const app = express();

app.listen(port, start());
app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use (public);
app.use(express.urlencoded({extended:false})); //  req.body y el req.query
app.use(express.json())
app.use(method('m')); // En la url poner ?m=DELETE

app.use(require("./routes/main.routes"))
app.use('/products',require('./routes/product.routes'))
//app.use('/users',require ("./routes/users.routes"))



// Controllers

	// Main
		const {index} = require('../models/product.model')
    module.exports = {
      home: (req,res) =>{
         return res.render('index',{
           title: 'Home',
              products: index().filter(e => e.price > 2000)
         });
      },
    };
	// Product
      const {index,one,create,write} = require('../models/product.model');
      module.exports ={
        index: (req,res) =>{

          let products = index();

          if(req.query && req.query.name){
            products = products.filter(product => product.name.toLowerCase().indexOf(req.query.name.toLowerCase()) > -1)
          }
          return res.render('products/list',{
            title: 'List of products',
            products: products
          })
        },
        detail: (req, res) => {
          let product = one(parseInt(req.params.id))

          if(!product){
            return res.redirect('/products/')
          }
          return res.render('products/detail', {
            title: 'Detail of products',
            product:product 
          })
        },
        create: (req,res) => {
          return res.render('products/create', {
            title: 'Create Product',
          })
        },
        save: (req, res) => {
          req.body.image = req.files[0].filename
          let newProduct = create(req.body)
          let products = index();
          products.push(newProduct)
          write(products)
          return res.redirect('/products/')
        },
      }




// Routes
	
	// Main
const {Router}= require("express")
const router = Router()		

let { home } = require ('../controllers/main.controller');
router.get("/", home)
module.exports = router

	// Product
  const {Router} = require('express');
  const router = Router();
  const { index,detail, create, save } = require('../controllers/products.controller');
  const multer = require('multer');
  const {extname} = require('path')
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, './uploads/products');
    },
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, file.fieldname + '-' + uniqueSuffix +extname(file.originalname));
    }
  });
  const upload = multer({storage: storage});
  router.get('/', index)
  router.get('/detail/:id', detail)
  router.get('/create', create)
  router.post('/save',[upload.any()],save)
  module.exports = router



// Views
	
	// Index
		!
		nav>a[href="/"]{Link}*3
    sect>h2{Title}+ul
    li*4>a[href="/products/detail/$"]>(picture>img)+h2{Product Name $}+p{lorem20}
    <% products.forEach(element => { %>             
        <li>
            <a href="/products/detail/<%= element.id %>">
                <picture><img src="/products/<%= element.image  %>" alt=""></picture>
                <h2><%= element.name %> - <span>$<%= element.price %></span></h2>
                <p><%= element.description %></p>                   
            </a>
        </li>
    <% }) %>
      
  // Products 
      
      // List
        <form action="/products/" method="get">
            <input type="text" name="name" id="name" placeholder="Album Name">
            <button type="submit">Search</button>
        </form>
      
      // Detail
      
        <h2><%= product.name %> - <span>$<%= product.price %></span></h2>
        <picture><img src="/products/<%= product.image  %>" alt=""></picture>
        <p><%= product.description %></p>   
    
    // Create
      <section>
        <h2>New Albums</h2>
        <form action="/products/save" method="post" enctype="multipart/form-data">
          <input type="text" name="name" id="name" placeholder="Album Name" autocomplete="off">
          <input type="number" name="price" id="price" placeholder="Price" autocomplete="off">
          <input type="file" name="image" id="image" autocomplete="off">
          <textarea name="description" id="description" autocomplete="off"></textarea>
          <button type="submit">Save</button>
        </form>
      </section>
		
		



// DATA

	// JSON
  [
    {
        "id":1,
        "name": "Roxette Look Sharp!",
        "price": 1200,
        "description": "Look Sharp! es el segundo álbum de estudio del grupo sueco Roxette.",
        "image": "71SxUW4ERDL._SL1200_.jpg"
    },
    {   
        "id":2,
        "name": "ABBA Waterloo",
        "price": 2400,
        "description":"Waterloo es el nombre del segundo de estudio del grupo sueco ABBA.",
        "image": "81FuCd+bHcL._SL1400_.jpg"
    },
    {
        "id":3,
        "name": "Pink floyd",
        "price": 4000,
        "description": "The Dark Side of the Moon —en español: El Lado Oscuro de la Luna— es un álbum conceptual, el octavo de estudio de la banda británica de rock progresivo Pink Floyd.",
        "image": "Optical-dispersion.png"
    }
  ]

// Models

  // Product
  const {readFileSync, writeFileSync}= require('fs');
  const {resolve}= require('path');
  const model = {
    index:function(){
      let file = resolve(__dirname,'../data','products.json');
      let data = readFileSync(file);
      return JSON.parse(data);
    },
    one:function(id){
      let file = resolve(__dirname,'../data','products.json');
      let data = readFileSync(file);
      let products = JSON.parse(data);
      return products.find(product => product.id === id)
    },
    create: function(data){
      let file = resolve(__dirname,'../data','products.json');
      let info = readFileSync(file);
      let products = JSON.parse(info);
      let lastProduct= products[products.length - 1];
      return Object({
        id: products.length == 0 ? 1 : lastProduct.id + 1,
        name: data.name,
        price: parseInt(data.price),
        description: data.description,
        image: data.image
      })
    },
    write: function(data) {
      let file = resolve(__dirname,'../data','products.json');
      let info = JSON.stringify(data,null,2);
      return writeFileSync(file, info);
    },
  }

  module.exports = model;





