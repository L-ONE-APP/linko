
export type WeatherConditionCode = 
  | 'SUNNY'
  | 'CLEAR_NIGHT'
  | 'PARTLY_CLOUDY'
  | 'PARTLY_CLOUDY_NIGHT'
  | 'CLOUDY'
  | 'RAIN'
  | 'HEAVY_RAIN'
  | 'THUNDERSTORM'
  | 'SNOW'
  | 'FOG';

export interface LocationData {
  city: string;
  country: string;
  localTime: string;
}

export interface CurrentWeatherData {
  temperature: number;
  condition: string;
  conditionCode: WeatherConditionCode;
  feelsLike: number;
  high: number;
  low: number;
  isDay: boolean;
}

export interface HourlyData {
  time: string;
  temperature: number;
  conditionCode: WeatherConditionCode;
}

export interface DailyData {
  day: string;
  high: number;
  low: number;
  conditionCode: WeatherConditionCode;
}

export interface WeatherDetailsData {
  humidity: number;
  windSpeed: number;
  uvIndex: number;
  visibility: number; // in km
  sunrise: string;
  sunset: string;
}

export interface AQIData {
  value: number;
  quality: string;
}

export interface WeatherData {
  location: LocationData;
  current: CurrentWeatherData;
  hourly: HourlyData[];
  daily: DailyData[];
  details: WeatherDetailsData;
  aqi: AQIData;
}
