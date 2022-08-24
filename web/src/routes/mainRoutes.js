const express = require("express");
const router = express.Router();
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("products") });

const {home, info, us} = require("../controllers/mainController");

router.get("/", home);
router.get("/info", info);
router.get("/us", us);

module.exports = router;
