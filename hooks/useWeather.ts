
import { useState, useCallback, useEffect } from 'react';
import type { WeatherData } from '../types';
import fetchWeatherData from '../services/geminiService';

export const useWeather = (defaultCity: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getWeather(defaultCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCity]);

  return { weatherData, loading, error, getWeather };
};
