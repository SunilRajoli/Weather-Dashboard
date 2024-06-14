import React from 'react';
import styles from '../styles/Favorites.module.css';

const Favorites = ({ favorites, onRemoveFavorite, onSelectFavorite }) => {
  return (
    <div className={styles.favorites}>
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index} className={styles.favoriteItem}>
            <span onClick={() => onSelectFavorite(city)}>{city}</span>
            <button onClick={() => onRemoveFavorite(city)} className={styles.removeButton}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
