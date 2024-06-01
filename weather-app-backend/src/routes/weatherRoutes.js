const express = require('express');
const weatherController = require('../controllers/weatherController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:location', auth, weatherController.getWeather);

module.exports = router;
