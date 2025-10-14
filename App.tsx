
import React, { useState, useEffect, useMemo } from 'react';
import type { WeatherData } from './types';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import WeatherDetails from './components/WeatherDetails';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const { weatherData, loading, error, getWeather } = useWeather('Tokyo');

  const backgroundClass = useMemo(() => {
    if (!weatherData) return 'from-gray-700 to-gray-900'; // Default background
    
    const condition = weatherData.current.conditionCode.toUpperCase();
    const isDay = weatherData.current.isDay;

    if (isDay) {
        if (condition.includes('SUN') || condition.includes('CLEAR')) return 'from-sky-400 to-blue-600';
        if (condition.includes('CLOUD')) return 'from-slate-400 to-gray-500';
        if (condition.includes('RAIN') || condition.includes('DRIZZLE')) return 'from-blue-400 to-slate-600';
        if (condition.includes('THUNDER') || condition.includes('STORM')) return 'from-gray-800 to-slate-900';
        if (condition.includes('SNOW') || condition.includes('FLURRIES')) return 'from-sky-200 to-slate-400';
        if (condition.includes('FOG') || condition.includes('MIST') || condition.includes('HAZE')) return 'from-slate-300 to-gray-400';
    } else {
        if (condition.includes('CLEAR')) return 'from-indigo-900 to-black';
        if (condition.includes('CLOUD')) return 'from-slate-800 to-gray-900';
        if (condition.includes('RAIN') || condition.includes('DRIZZLE')) return 'from-indigo-800 to-slate-900';
        if (condition.includes('THUNDER') || condition.includes('STORM')) return 'from-gray-900 to-black';
        if (condition.includes('SNOW') || condition.includes('FLURRIES')) return 'from-slate-700 to-gray-800';
        if (condition.includes('FOG') || condition.includes('MIST') || condition.includes('HAZE')) return 'from-slate-700 to-gray-800';
    }

    return isDay ? 'from-blue-500 to-cyan-500' : 'from-gray-800 to-black';
  }, [weatherData]);

  return (
    <main className={`min-h-screen w-full bg-gradient-to-br p-4 sm:p-6 lg:p-8 text-white select-none transition-colors duration-1000 ${backgroundClass}`}>
      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={getWeather} loading={loading} />
        
        <div className="mt-6">
          {loading && <Loader />}
          {error && !loading && <ErrorDisplay message={error} />}
          {weatherData && !loading && (
            <div className="space-y-6 animate-fade-in">
              <CurrentWeather data={weatherData.current} location={weatherData.location} />
              <HourlyForecast data={weatherData.hourly} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DailyForecast data={weatherData.daily} />
                <WeatherDetails data={weatherData.details} aqi={weatherData.aqi} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
