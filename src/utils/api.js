import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async (city, units = 'metric') => {
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}`);
  return response.data;
};

export const fetchForecastData = async (city, units = 'metric') => {
  const response = await axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=${units}`);
  return response.data;
};
