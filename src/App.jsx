import { useContext, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherInfo, { Forecast } from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';
import { WeatherContext } from './context/WeatherContext';

const App = () => {
  const { fetchWeather, lastCity } = useContext(WeatherContext);

  useEffect(() => {
    if (lastCity) fetchWeather(lastCity);
  }, [fetchWeather, lastCity]);

  return (
    <div className="App">
      <SearchBar />
      <WeatherInfo />
      <Forecast />
      <ErrorMessage />
    </div>
  );
};

export default App;