import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/feedback`,
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage('');
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        placeholder="Feedback"
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default Feedback;
