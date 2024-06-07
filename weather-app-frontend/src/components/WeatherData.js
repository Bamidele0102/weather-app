import React, { useState } from 'react';
import axios from 'axios';

const WeatherData = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/weather/${location}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Weather Data
        </button>
      </form>
      {weatherData && (
        <div>
          <h3 className="text-xl font-bold mb-2">Weather Data for {location}</h3>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherData;
