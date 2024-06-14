# Weather Dashboard

This Weather Dashboard application allows users to search for weather information of cities, view current weather conditions, and see a 5-day forecast. Users can add cities to their favorites list and manage them.

## Features

- Search for a city to view current weather and 5-day forecast.
- Add cities to favorites list.
- Remove cities from favorites list.
- View weather data for favorite cities.
- Toggle between Celsius and Fahrenheit.
- Persist favorite cities and last searched city using local storage.

## Technologies Used

- React.js
- Next.js (for server-side rendering)
- OpenWeatherMap API
- JSON Server (for storing favorite cities locally)
- Axios (for HTTP requests)

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/Weather-Dashboard.git
cd weather-dashboard
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:
Create a .env file in the root directory with the following:

```
NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
```
Replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key.

4. Start the development server:
```
npm run dev
```

This will start the development server on http://localhost:3000.

## API Key
To obtain an API key for OpenWeatherMap, visit OpenWeatherMap API and sign up for a free account.
