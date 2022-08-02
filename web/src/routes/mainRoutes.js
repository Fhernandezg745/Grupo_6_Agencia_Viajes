const express = require("express");
const router = express.Router();
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("products") });

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);

module.exports = router;
