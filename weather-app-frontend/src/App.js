import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Location from './components/Location';
import WeatherData from './components/WeatherData';
import WeatherForecast from './components/WeatherForecast';
import Feedback from './components/Feedback';
import './styles.css'; // Import Tailwind CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/weather" element={<WeatherData />} />
          <Route path="/forecasts" element={<WeatherForecast />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
