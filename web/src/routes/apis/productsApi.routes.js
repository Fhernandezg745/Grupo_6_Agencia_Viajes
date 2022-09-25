const { Router } = require("express");
const router = Router();

const { all, oneProduct } = require('../../controllers/apis/usersApi')


router.get('/', all);



module.exports = router;