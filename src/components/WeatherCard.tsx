import React from "react";
import { WeatherData, formatDate, getWeatherIconPath } from "@/lib/weather";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  return (
    <div
      className="w-full max-w-3xl mx-auto px-4 rounded-2xl p-6 border border-white/40 shadow-lg"
      style={{ backgroundColor: "#fefae0" }}
    >
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#7d3705]">
              {weatherData.name}
            </h2>
            <p className="text-base text-[#7d3705]">
              {formatDate(weatherData.dt)}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={getWeatherIconPath(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
              className="w-16 h-16"
            />
          </div>

          <div className="text-left sm:text-right">
            <div className="text-4xl font-bold text-[#7d3705]">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="text-xl capitalize text-[#7d3705]">
              {weatherData.weather[0].description}
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-white/30">
          <div className="flex justify-between items-center">
            <span className="font-medium text-base text-[#7d3705]">
              Highest Room Temperature:
            </span>
            <span className="font-semibold text-base text-[#7d3705]">
              {Math.round(weatherData.main.temp_max)}°C
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-base text-[#7d3705]">
              Lowest Room Temperature:
            </span>
            <span className="font-semibold text-base text-[#7d3705]">
              {Math.round(weatherData.main.temp_min)}°C
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-base flex items-center text-[#7d3705]">
              <span className="text-blue-500 mr-1">💧</span>Humidity:
            </span>
            <span className="font-semibold text-base text-[#7d3705]">
              {weatherData.main.humidity}%
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-base flex items-center text-[#7d3705]">
              <span className="text-gray-500 mr-1">💨</span>Wind Speed:
            </span>
            <span className="font-semibold text-base text-[#7d3705]">
              {weatherData.wind.speed} km/hr
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
