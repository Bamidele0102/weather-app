const express = require('express');
const weatherForecastController = require('../controllers/weatherForecastController');
const router = express.Router();

router.post('/', weatherForecastController.addForecast);
router.get('/:locationId', weatherForecastController.getForecastsByLocation);

module.exports = router;
