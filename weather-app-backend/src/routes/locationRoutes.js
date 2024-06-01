const express = require('express');
const locationController = require('../controllers/locationController');
const router = express.Router();

router.post('/', locationController.addLocation);
router.get('/', locationController.getUserLocations);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
