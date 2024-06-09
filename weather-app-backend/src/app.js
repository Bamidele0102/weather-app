const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const weatherForecastRoutes = require('./routes/weatherForecastRoutes');
const auth = require('./middleware/auth');
const cors = require('cors'); // Import the cors middleware

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Allow requests from specific origins (replace frontend-url.vercel.app with your actual frontend domain)
app.use(cors({
  origin: 'https://weather-app-frontend-i88dyfvnw.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Weather App API');
});

// User routes
app.use('/api/users', userRoutes);

// Location routes
app.use('/api/locations', auth, locationRoutes);

// Weather data routes
app.use('/api/weather', auth, weatherRoutes);

// Feedback routes
app.use('/api/feedback', auth, feedbackRoutes);

// Weather forecast routes
app.use('/api/forecasts', auth, weatherForecastRoutes);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
