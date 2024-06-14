import React, { useState } from 'react';
import styles from '../styles/WeatherDisplay.module.css';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnits = () => {
    setIsCelsius((prev) => !prev);
  };

  const formatDateTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleString(); // Convert Unix timestamp to readable date and time
  };

  if (!weatherData) return <div>No weather data available</div>;

  const temperatureUnit = isCelsius ? '°C' : '°F';

  return (
    <div className={styles.weatherDisplay}>
      <h2>{weatherData.name}</h2>
      <p>
        Temperature: {isCelsius ? weatherData.main.temp : (weatherData.main.temp * 9/5 + 32).toFixed(2)} {temperatureUnit}
      </p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <h3>5-Day Forecast</h3>
      <div className={styles.forecast}>
        {forecastData.map((day, index) => (
          <div key={index} className={styles.forecastDay}>
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>Temp: {isCelsius ? day.main.temp : (day.main.temp * 9/5 + 32).toFixed(2)} {temperatureUnit}</p>
            <p>Report: {formatDateTime(day.dt)}</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
      <button onClick={toggleUnits} className={styles.toggleButton}>
        {isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
    </div>
  );
};

export default WeatherDisplay;




