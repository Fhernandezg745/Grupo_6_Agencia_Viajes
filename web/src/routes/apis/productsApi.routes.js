const { Router } = require("express");
const router = Router();

const { all, oneProduct } = require('../../controllers/apis/productsApi');


router.get('/', all);
router.get('/:id', oneProduct);



module.exports = router;