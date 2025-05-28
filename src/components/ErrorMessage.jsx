import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ErrorMessage = () => {
  const { error } = useContext(WeatherContext);

  return error ? <div className="error-box">{error}</div> : null;
};

export default ErrorMessage;