import axios from "axios";
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // ✅
// Interfaces for type safety
export interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  dt: number;
}

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

export interface AirQualityData {
  main: {
    aqi: number;
  };
  components: {
    co: number;
    no2: number;
    pm2_5: number;
    pm10: number;
  };
}

// 📦 Main weather fetcher
export const fetchWeatherData = async (city: string) => {
  try {
    // 1. Get exact coordinates from city name
    const geoRes = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`
    );

    if (!geoRes.data || geoRes.data.length === 0) {
      throw new Error("City not found");
    }

    const { lat, lon, name: resolvedName } = geoRes.data[0];

    // 2. Get current weather by coordinates
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    // 3. Get forecast
    const forecastRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    // 4. Get air pollution
    const airRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    // Override the city name with the one user typed
    const customWeatherData: WeatherData = {
      ...weatherRes.data,
      name: city.trim(), // <- force it to show user-input city
    };

    return {
      current: customWeatherData,
      forecast: forecastRes.data.list.slice(0, 5) as ForecastItem[],
      airQuality: airRes.data.list[0] as AirQualityData,
    };
  } catch (error) {
    console.error("Weather API Error:", error);
    throw error;
  }
};

// 🖼️ Get local weather icon image path
export const getWeatherIconPath = (iconCode: string): string => {
  return `/weather-icons/${iconCode}.png`;
};

// 🕒 Format date nicely
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

// 🕒 Format time nicely
export const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

// 📊 AQI Description
export const getAQIDescription = (aqi: number) => {
  const descriptions = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  return descriptions[aqi - 1] || "Unknown";
};
