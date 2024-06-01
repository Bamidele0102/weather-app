const db = require('../db');

const WeatherForecast = {
  create: (locationId, forecastDate, temperature, humidity, description, callback) => {
    const query = 'INSERT INTO weather_forecasts (location_id, forecast_date, temperature, humidity, description) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [locationId, forecastDate, temperature, humidity, description], callback);
  },
  findByLocationId: (locationId, callback) => {
    const query = 'SELECT * FROM weather_forecasts WHERE location_id = ? ORDER BY forecast_date ASC';
    db.query(query, [locationId], callback);
  },
  findAll: (callback) => {
    const query = 'SELECT * FROM weather_forecasts';
    db.query(query, callback);
  }
};

module.exports = WeatherForecast;
