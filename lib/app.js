const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocationRes, mungeWeatherRes, mungeYelpRes } = require('./munge.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
  try {
    const someCity = req.query.search;
    
    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${someCity}&format=json`);

    const mundgedData = mungeLocationRes(data.body);

    res.json(mundgedData);  
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try {

    // const { latitude, longitude } = req.query;

    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);

    const mungedData = mungeWeatherRes(response.body);

    res.json(mungedData);  
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

app.get('/reviews', async(req, res) => {
  try {

    const response = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`).set('Authorization', `Bearer ${process.env.YELP_KEY}`);

    const mungedData = mungeYelpRes(response.body);

    res.json(mungedData);  
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = app;
