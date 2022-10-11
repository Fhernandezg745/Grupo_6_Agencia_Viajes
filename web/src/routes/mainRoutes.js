const express = require("express");
const router = express.Router();
const storage = require("../modules/storage");
const multer = require("multer");
const upload = multer({ storage: storage("products") });

const {
  home,
  info,
  us,
  infoCovid,
  infoPassport,
  infoVaccine,
  infoVisa,
  infoDestination,
} = require("../controllers/mainController");

router.get("/", home);
router.get("/info", info);
router.get("/info/infoCovid", infoCovid);
router.get("/info/infoPassport", infoPassport);
router.get("/info/infoVaccine", infoVaccine);
router.get("/info/infoVisa", infoVisa);
router.get("/info/infoDestination", infoDestination);
router.get("/us", us);

module.exports = router;
