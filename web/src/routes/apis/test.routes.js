const { Router } = require('express');
const router = Router();
const { countries } = require('../controllers/api/test.controllers');

router.get('countries', countries);

module.exports = router;