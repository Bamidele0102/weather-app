import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="mb-2">Username: {profile.username}</p>
      <p className="mb-2">Email: {profile.email}</p>
      <p className="mb-2">Created At: {profile.created_at}</p>
    </div>
  );
};

export default Profile;
