
import React from 'react';
import type { HourlyData } from '../types';
import WeatherIcon from './WeatherIcon';

interface HourlyForecastProps {
  data: HourlyData[];
}

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
    {children}
  </div>
);

const HourlyForecast: React.FC<HourlyForecastProps> = ({ data }) => {
  return (
    <Card>
      <h2 className="text-sm font-bold uppercase text-white/70 mb-3 pl-2">Hourly Forecast</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2 -mb-2">
        {data.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-20 p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
          >
            <p className="font-medium text-sm text-white/80">{hour.time}</p>
            <WeatherIcon code={hour.conditionCode} className="w-12 h-12 my-1" />
            <p className="font-bold text-xl">{hour.temperature}°</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HourlyForecast;
