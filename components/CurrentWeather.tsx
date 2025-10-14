
import React from 'react';
import type { CurrentWeatherData, LocationData } from '../types';
import WeatherIcon from './WeatherIcon';

interface CurrentWeatherProps {
  data: CurrentWeatherData;
  location: LocationData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, location }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{location.city}</h1>
        <p className="text-lg text-white/80 mt-1">{location.country}, {location.localTime}</p>
        <p className="text-xl mt-4">{data.condition}</p>
      </div>
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-6 mt-6 sm:mt-0">
        <WeatherIcon code={data.conditionCode} className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg" />
        <div>
          <p className="text-6xl sm:text-7xl lg:text-8xl font-thin tracking-tighter">
            {data.temperature}°
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
             <p className="text-md text-white/80">H: {data.high}°</p>
             <p className="text-md text-white/80">L: {data.low}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
