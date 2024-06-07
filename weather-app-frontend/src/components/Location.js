import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Location = () => {
  const [locationName, setLocationName] = useState('');
  const [locations, setLocations] = useState([]);

  const handleChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/locations`,
        { name: locationName },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      fetchLocations();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLocations = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/locations`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={locationName}
          placeholder="Location Name"
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Location
        </button>
      </form>
      {locations.length > 0 && (
        <div>
          <h3 className="text-xl font-bold">Locations</h3>
          {locations.map((location) => (
            <div key={location.id} className="border border-gray-300 rounded-md p-2 mt-2">
              <p className="text-gray-800">ID: {location.id}</p>
              <p className="text-gray-800">Name: {location.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;
