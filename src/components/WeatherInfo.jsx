import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherInfo = () => {
  const { weatherData, unit } = useContext(WeatherContext);

  if (!weatherData) return null;

  const { name, main, wind, weather } = weatherData;
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="info-box">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}{tempUnit}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} {windUnit}</p>
      <p>Condition: {weather[0].main}</p>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon" />
    </div>
  );
};

export default WeatherInfo;

// 5-day forecast component
export const Forecast = () => {
  const { forecastData, unit } = useContext(WeatherContext);
  if (!forecastData || !forecastData.list) return null;

  // filter for one forecast per day
  const daily = forecastData.list.filter(item => item.dt_txt.includes('12:00:00'));
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="forecast-container">
      {daily.slice(0, 5).map((item, idx) => (
        <div className="forecast-day" key={idx}>
          <div>{new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</div>
          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
          <div>{Math.round(item.main.temp)}{tempUnit}</div>
          <div style={{ fontSize: '0.9em', color: '#888' }}>{item.weather[0].main}</div>
        </div>
      ))}
    </div>
  );
};