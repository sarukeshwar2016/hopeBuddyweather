import React from "react";
import { ForecastItem, getWeatherIconPath } from "@/lib/weather";

interface ForecastCardProps {
  forecast: ForecastItem[];
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const formatSingleTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hour = date.getHours();
    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const ampm = hour < 12 ? "AM" : "PM";
    return `${hour12}${ampm}`;
  };

  return (
    <div className="space-y-6 sm:space-y-9 -ml-4 sm:-ml-16">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center mt-4 sm:mt-6">
        <span className="mr-2 text-base sm:text-lg">📅</span>
        3-Hour Forecast (Next 15 hrs)
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
        {forecast.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="bg-[#68468B] rounded-xl sm:rounded-2xl p-2 sm:p-3 text-white shadow-lg"
          >
            <div className="text-center space-y-1">
              <div className="text-xs sm:text-sm font-medium text-[#E0D7F3]">
                {formatSingleTime(item.dt)}
              </div>
              <img
                src={getWeatherIconPath(item.weather[0].icon)}
                alt={item.weather[0].description}
                className="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
              />
              <div className="text-xs sm:text-sm font-medium text-[#E0D7F3]">
                {Math.round(item.main.temp)}°
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#E0D7F3]">
                {item.weather[0].description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;