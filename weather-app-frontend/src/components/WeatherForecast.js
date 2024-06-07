import React, { useState } from 'react';
import axios from 'axios';

const WeatherForecast = () => {
  const [locationId, setLocationId] = useState('');
  const [forecasts, setForecasts] = useState([]);

  const handleChange = (e) => {
    setLocationId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/forecasts/${locationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setForecasts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={locationId}
          placeholder="Location ID"
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Weather Forecasts
        </button>
      </form>
      {forecasts.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-2">Weather Forecasts</h3>
          {forecasts.map((forecast, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4 mb-4">
              <p>Date: {forecast.forecast_date}</p>
              <p>Temperature: {forecast.temperature}°C</p>
              <p>Humidity: {forecast.humidity}%</p>
              <p>Description: {forecast.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
