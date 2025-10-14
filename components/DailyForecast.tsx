
import React from 'react';
import type { DailyData } from '../types';
import WeatherIcon from './WeatherIcon';

interface DailyForecastProps {
  data: DailyData[];
}

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
    {children}
  </div>
);

const DailyForecast: React.FC<DailyForecastProps> = ({ data }) => {
  return (
    <Card>
      <h2 className="text-sm font-bold uppercase text-white/70 mb-2 pl-2">7-Day Forecast</h2>
      <div className="space-y-1">
        {data.map((day, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <p className="font-bold w-1/4">{day.day}</p>
            <div className="w-1/4 flex justify-center">
              <WeatherIcon code={day.conditionCode} className="w-8 h-8" />
            </div>
            <div className="w-2/4 flex justify-end items-center gap-3">
              <p className="font-medium text-white/80">L: {day.low}°</p>
              <div className="w-16 h-1 bg-white/20 rounded-full">
                <div 
                  className="h-1 bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full" 
                  style={{ width: `${((day.high - day.low) / 20) * 100}%` }} // simple scaling
                />
              </div>
              <p className="font-medium">H: {day.high}°</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DailyForecast;
