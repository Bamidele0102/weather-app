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
      <textarea value={message} placeholder="Feedback" onChange={handleChange}></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default Feedback;
