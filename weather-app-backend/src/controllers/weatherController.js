const axios = require('axios');
const WeatherData = require('../models/weatherData');

const getWeather = async (req, res) => {
  const { location } = req.params;
  try {
    const weatherData = await fetchWeatherData(location);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
};

const fetchWeatherData = async (location) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const response = await axios.get(url);
  const weatherData = response.data;
  // Save weather data to database if needed
  return weatherData;
};

module.exports = { getWeather, fetchWeatherData };
