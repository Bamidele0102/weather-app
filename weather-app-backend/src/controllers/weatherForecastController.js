const WeatherForecast = require('../models/weatherForecasts');

const addForecast = (req, res) => {
  const { locationId, forecastDate, temperature, humidity, description } = req.body;
  WeatherForecast.create(locationId, forecastDate, temperature, humidity, description, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId });
  });
};

const getForecastsByLocation = (req, res) => {
  const { locationId } = req.params;
  WeatherForecast.findByLocationId(locationId, (err, forecasts) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(forecasts);
  });
};

module.exports = { addForecast, getForecastsByLocation };
