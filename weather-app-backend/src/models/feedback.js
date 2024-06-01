const db = require('../db');

const Feedback = {
  create: (userId, message, callback) => {
    const query = 'INSERT INTO feedback (user_id, message) VALUES (?, ?)';
    db.query(query, [userId, message], callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM feedback';
    db.query(query, callback);
  }
};

module.exports = Feedback;
