# Weather Dashboard

A modern, responsive weather dashboard built with **React** and **Vite**. Instantly search for any city to view the current weather and a 5-day forecast. Switch between Celsius and Fahrenheit, and enjoy a clean, user-friendly interface with real-time updates and caching via **SWR**.

---

## Features

- **Search by City:** Enter a city name and instantly get its weather.
- **Current Weather:** See temperature, humidity, wind speed, and conditions.
- **5-Day Forecast:** Get daily weather forecasts for the upcoming days.
- **Real-Time Updates:** Weather data updates every 30 seconds.
- **Unit Switch:** Toggle between Celsius (°C) and Fahrenheit (°F).
- **Remembers Last City:** Saves your last searched city using `localStorage`.
- **Responsive UI:** Works well on mobile, tablet, and desktop screens.
- **Error Handling:** Shows user-friendly messages for invalid inputs or API failures.
- **SWR Integration:** Uses SWR for efficient data fetching and caching.
- **Optional Supabase Login:** Auth support with email magic link (optional enhancement).

---

## Screenshots

![Weather Dashboard Screenshot](screenshot.png)

---

## How I Approached the Assignment

I began by breaking the project into modular React components:
- A **SearchBar** for input,
- A **WeatherInfo** card for display,
- An **ErrorMessage** component for graceful fallback.

I used **React Context API** for global state management (e.g., selected city, error states), and integrated the **OpenWeatherMap API** to fetch weather data. To reduce redundant API calls and improve performance, I implemented **SWR** for caching and revalidation every 30 seconds.

The app is fully responsive using CSS and media queries. I also preserved the last searched city using `localStorage` and optionally integrated **Supabase** for user login.

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Get an OpenWeatherMap API key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Go to your account and copy your API key
4. **Create a `.env` file in the project root:**
   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
- Type a city name and press **Enter** or click **Search**.
- Switch between **Celsius** and **Fahrenheit** using the toggle above the search bar.
- View the current weather and a 5-day forecast.
- Errors (e.g., invalid city) will be shown below the forecast.

## Customization
- **Styling:** All styles are in `src/index.css`. Tweak colors, fonts, or layout as you like.
- **API:** Uses OpenWeatherMap's free API. You can extend to show more details or hourly forecasts.



---
Made with ❤️ using React + Vite.
