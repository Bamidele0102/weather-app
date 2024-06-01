const db = require('../db');

const WeatherData = {
  create: (locationId, temperature, humidity, description, callback) => {
    const query = 'INSERT INTO weather_data (location_id, temperature, humidity, description) VALUES (?, ?, ?, ?)';
    db.query(query, [locationId, temperature, humidity, description], callback);
  },
  findByLocationId: (locationId, callback) => {
    const query = 'SELECT * FROM weather_data WHERE location_id = ? ORDER BY timestamp DESC LIMIT 1';
    db.query(query, [locationId], callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM weather_data';
    db.query(query, callback);
  }
};

module.exports = WeatherData;
