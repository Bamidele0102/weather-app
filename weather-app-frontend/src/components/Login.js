import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, formData);
      console.log(response.data);
      // Save the token to localStorage
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border border-gray-300 rounded-md p-2 mb-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border border-gray-300 rounded-md p-2 mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
    </form>
  );
};

export default Login;

