const db = require('../db');

const Location = {
  create: (userId, name, callback) => {
    const query = 'INSERT INTO locations (user_id, name) VALUES (?, ?)';
    db.query(query, [userId, name], callback);
  },
  findByUserId: (userId, callback) => {
    const query = 'SELECT * FROM locations WHERE user_id = ?';
    db.query(query, [userId], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM locations WHERE id = ?';
    db.query(query, [id], callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM locations';
    db.query(query, callback);
  }
};

module.exports = Location;
