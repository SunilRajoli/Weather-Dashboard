import React, { useState, useEffect } from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import { getWeather, getForecast } from '../utils/api';
import styles from '../styles/WeatherDashboard.module.css';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [lastCity, setLastCity] = useState('');

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    const city = localStorage.getItem('lastCity') || '';
    if (city) {
      fetchWeather(city);
      setLastCity(city);
    }
  }, []);

  const fetchWeather = async (city) => {
    try {
      const weather = await getWeather(city);
      const forecast = await getForecast(city);

      setWeatherData(weather);
      setForecastData(forecast);
      localStorage.setItem('lastCity', city);
      setLastCity(city);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error gracefully (e.g., show error message to user)
    }
  };

  const addFavorite = (city) => {
    const updatedFavorites = [...favorites, city];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (city) => {
    const updatedFavorites = favorites.filter((fav) => fav !== city);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleSearch = (city) => {
    fetchWeather(city);
    if (!favorites.includes(city)) {
      addFavorite(city);
    }
  };

  const handleSelectFavorite = (city) => {
    fetchWeather(city);
  };

  return (
    <div className={styles.dashboard}>
      <Search onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />
      <Favorites
        favorites={favorites}
        onRemoveFavorite={removeFavorite}
        onSelectFavorite={handleSelectFavorite}
      />
    </div>
  );
};

export default WeatherDashboard;
