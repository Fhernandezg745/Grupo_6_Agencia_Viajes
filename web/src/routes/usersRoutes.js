const express = require("express");
const router = express.Router();
const { extname } = require("path");
const usersController = require("../controllers/usersController");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/users");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.get("/register", usersController.register);
router.post("/save", [upload.any()], usersController.save);

router.get("/login", usersController.login);

router.get("/logged", usersController.logged);


module.exports = router;