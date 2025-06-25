import React, { useState } from "react";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import WeatherCard from "@/components/WeatherCard";
import ForecastCard from "@/components/ForecastCard";
import AirQualityCard from "@/components/AirQualityCard";
import {
  fetchWeatherData,
  WeatherData,
  ForecastItem,
  AirQualityData,
} from "@/lib/weather";

const Index = () => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherData(city);
      setCurrentWeather(data.current);
      setForecast(data.forecast);
      setAirQuality(data.airQuality);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGetWeather();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: "url('/background.jpeg')",
      }}
    >
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City Name"
                  className="flex-1 px-4 py-3 rounded-2xl border-0 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white px-6 py-3 rounded-2xl font-medium transition-colors flex items-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                  Get Weather
                </button>
              </form>

              {error && (
                <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
            </div>

            {/* Weather Info */}
            {currentWeather && <WeatherCard weatherData={currentWeather} />}

            {(forecast.length > 0 || airQuality) && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {forecast.length > 0 && (
                  <div className="md:col-span-3">
                    <ForecastCard forecast={forecast} />
                  </div>
                )}
                {airQuality && (
                  <div className="md:col-span-2">
                    <AirQualityCard airQuality={airQuality} />
                  </div>
                )}
              </div>
            )}

            {/* Default Welcome Section */}
            {!currentWeather && !loading && (
              <div className="bg-cream rounded-2xl p-8 shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to HopeBuddy Weather
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Stay informed with real-time weather updates tailored to your location.
                  HopeBuddy Weather helps you track temperature, humidity, wind speed, air quality,
                  and future forecasts — all in one beautifully designed interface.
                  <br /><br />
                  Whether you're planning your day, scheduling travel, or just curious about the climate,
                  HopeBuddy gives you the insights you need at a glance.
                  Start by entering any city in the search bar above and discover what the skies hold for you!
                </p>
              </div>
            )}
          </div>

          {/* Right Column Spacer */}
          <div className="flex justify-center items-end w-full min-h-[900px]" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
