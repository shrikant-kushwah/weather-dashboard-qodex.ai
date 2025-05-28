import { createContext, useState, useCallback, useEffect } from 'react';
import { fetchWeatherData, fetchForecastData } from '../utils/api';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [lastCity, setLastCity] = useState(localStorage.getItem('lastCity'));
  const [unit, setUnit] = useState('metric');

  const fetchWeather = useCallback(async (city, selectedUnit = unit) => {
    try {
      setError('');
      const data = await fetchWeatherData(city, selectedUnit);
      setWeatherData(data);
      setLastCity(city);
      localStorage.setItem('lastCity', city);
    } catch (err) {
      setError('City not found. Please enter a correct city name.');
      setWeatherData(null);
    }
  }, [unit]);

  const fetchForecast = useCallback(async (city, selectedUnit = unit) => {
    try {
      const data = await fetchForecastData(city, selectedUnit);
      setForecastData(data);
    } catch (err) {
      setForecastData(null);
    }
  }, [unit]);

  useEffect(() => {
    if (lastCity) {
      fetchWeather(lastCity, unit);
      fetchForecast(lastCity, unit);
    }
  
  }, [fetchWeather, fetchForecast, lastCity, unit]);

  return (
    <WeatherContext.Provider value={{ weatherData, forecastData, fetchWeather, fetchForecast, error, lastCity, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};