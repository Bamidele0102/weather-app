const Feedback = require('../models/feedback');

const submitFeedback = (req, res) => {
  const { userId, message } = req.body;
  Feedback.create(userId, message, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId });
  });
};

const getAllFeedback = (req, res) => {
  Feedback.findAll((err, feedback) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(feedback);
  });
};

module.exports = { submitFeedback, getAllFeedback };
