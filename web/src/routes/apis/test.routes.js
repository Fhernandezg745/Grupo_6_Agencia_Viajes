const { Router } = require('express');
const router = Router();
const { countries } = require('../../controllers/apis/test.controller');
router.get('countries', countries);

module.exports = router;