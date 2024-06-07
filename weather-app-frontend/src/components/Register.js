import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mb-2" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mb-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
    </form>
  );
};

export default Register;
