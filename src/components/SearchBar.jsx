import { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { fetchWeather, fetchForecast, unit, setUnit } = useContext(WeatherContext);

  const handleSearch = () => {
    if (input.trim()) {
      fetchWeather(input, unit);
      fetchForecast(input, unit);
      setInput('');
    }
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="unit-switcher" style={{ marginBottom: 8, textAlign: 'center' }}>
        <label>
          <input
            type="radio"
            value="metric"
            checked={unit === 'metric'}
            onChange={handleUnitChange}
          />
          Celsius
        </label>
        <label style={{ marginLeft: 12 }}>
          <input
            type="radio"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={handleUnitChange}
          />
          Fahrenheit
        </label>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;