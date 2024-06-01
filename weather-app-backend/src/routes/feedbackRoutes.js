const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const router = express.Router();

router.post('/', feedbackController.submitFeedback);
router.get('/', feedbackController.getAllFeedback);

module.exports = router;
