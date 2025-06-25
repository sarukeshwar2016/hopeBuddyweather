import React from "react";
import { AirQualityData, getAQIDescription } from "@/lib/weather";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AirQualityCardProps {
  airQuality: AirQualityData;
}

const AirQualityCard: React.FC<AirQualityCardProps> = ({ airQuality }) => {
  const aqiLevel = airQuality.main.aqi;
  const aqiDescription = getAQIDescription(aqiLevel);

  const getAQIColor = (aqi: number) => {
    const colors = [
      "bg-green-500",
      "bg-yellow-500",
      "bg-orange-500",
      "bg-red-500",
      "bg-purple-600",
    ];
    return colors[aqi - 1] || "bg-gray-500";
  };

  return (
    <div className="space-y-3 mt-6 w-[300px] -ml-2">
      {/* Title */}
      <h3 className="text-2xl font-bold text-[#000000] flex items-center justify-start leading-none mb-8"> {/* Added mb-2 */}
  <span className="mr-2 text-2xl">🏭</span>
  Air Pollution Index
</h3>

      {/* Card moved down */}
      <ScrollArea className="h-[300px] rounded-2xl mt-12"> {/* Increased mt-4 to mt-8 */}
        <div
          className="rounded-2xl p-3 border border-white/40 shadow-lg"
          style={{ backgroundColor: "#fefae0" }}
        >
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-sm mb-1 text-[#7d3705] font-bold">
                Air Quality
              </div>
              <div
                className={`inline-block px-4 py-1.5 rounded-full text-white text-base font-semibold ${getAQIColor(
                  aqiLevel
                )}`}
              >
                {aqiDescription}
              </div>
              <div className="text-sm mt-2 text-[#7d3705]">
                AQI Level: {aqiLevel}
              </div>
            </div>

            {/* Pollutant Data */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/30">
              <div className="text-center">
                <div className="text-sm uppercase tracking-wide text-[#7d3705]">
                  CO
                </div>
                <div className="text-sm font-semibold text-[#7d3705]">
                  {Math.round(airQuality.components.co)} μg/m³
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm uppercase tracking-wide text-[#7d3705]">
                  NO₂
                </div>
                <div className="text-sm font-semibold text-[#7d3705]">
                  {Math.round(airQuality.components.no2)} μg/m³
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm uppercase tracking-wide text-[#7d3705]">
                  PM2.5
                </div>
                <div className="text-sm font-semibold text-[#7d3705]">
                  {Math.round(airQuality.components.pm2_5)} μg/m³
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AirQualityCard;