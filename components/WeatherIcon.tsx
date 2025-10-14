
import React from 'react';
import type { WeatherConditionCode } from '../types';

interface WeatherIconProps {
  code: WeatherConditionCode;
  className?: string;
}

const Sunny: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><circle cx="32" cy="32" r="14.4" fill="#fcc34f"/><g><path d="M32 0v8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M32 56v8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M5.69 5.69l5.66 5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M52.66 52.66l5.66 5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M0 32h8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M56 32h8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M5.69 58.31l5.66-5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M52.66 11.34l5.66-5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/></g><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></g></svg>
);

const ClearNight: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><path d="M43.62 47.38a18.4 18.4 0 1 1 12.08-31.78 20.3 20.3 0 0 0-25.7 25.7 18.27 18.27 0 0 0 13.62 6.08z" fill="#f7e4a1"/><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></g></svg>
);

const Cloudy: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g></svg>
);

const PartlyCloudy: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><circle cx="32" cy="32" r="14.4" fill="#fcc34f"/><g><path d="M32 0v8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M32 56v8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M5.69 5.69l5.66 5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M52.66 52.66l5.66 5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M0 32h8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M56 32h8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M5.69 58.31l5.66-5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M52.66 11.34l5.66-5.66" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/></g><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></g><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g></svg>
);

const PartlyCloudyNight: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}><g><path d="M43.62 47.38a18.4 18.4 0 1 1 12.08-31.78 20.3 20.3 0 0 0-25.7 25.7 18.27 18.27 0 0 0 13.62 6.08z" fill="#f7e4a1"/></g><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g></svg>
);

const Rain: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g><g><path d="M24 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path d="M32 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path d="M40 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>
);

const HeavyRain: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g><g><path d="M22 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path d="M30 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path d="M38 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path d="M46 48v8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" begin="-0.25s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>
);

const Snow: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g><g><path d="M32 44v12" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M26.34 46.5l5.66 9.8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M37.66 46.5l-5.66 9.8" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><path d="M24.5 54h15" fill="none" stroke="#429fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 32 50; 360 32 50"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></g></svg>
);

const Thunderstorm: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g><path d="m33 44-6 8h8l-6 8" fill="none" stroke="#fcc34f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>
);

const Fog: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}><g><path d="M46.67 36.17a15.42 15.42 0 0 1-13.06 7.63h-13a10.67 10.67 0 0 1 0-21.33 11.42 11.42 0 0 1 11.16 8.33 15.4 15.4 0 0 1 14.9 13Z" fill="#e6effc" stroke="#e6effc" stroke-linejoin="round" stroke-width="2"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="translate" values="-10 0; 10 0; -10 0"/></g><g><path d="M12 52h40" fill="none" stroke="#a3bde4" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0;1;1;0"/></path><path d="M16 44h32" fill="none" stroke="#a3bde4" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"><animate attributeName="opacity" begin="-1s" dur="2s" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>
);


const WeatherIcon: React.FC<WeatherIconProps> = ({ code, className }) => {
  switch (code) {
    case 'SUNNY':
      return <Sunny className={className} />;
    case 'CLEAR_NIGHT':
        return <ClearNight className={className} />;
    case 'PARTLY_CLOUDY':
      return <PartlyCloudy className={className} />;
    case 'PARTLY_CLOUDY_NIGHT':
      return <PartlyCloudyNight className={className} />;
    case 'CLOUDY':
      return <Cloudy className={className} />;
    case 'RAIN':
      return <Rain className={className} />;
    case 'HEAVY_RAIN':
        return <HeavyRain className={className} />;
    case 'THUNDERSTORM':
      return <Thunderstorm className={className} />;
    case 'SNOW':
      return <Snow className={className} />;
    case 'FOG':
      return <Fog className={className} />;
    default:
      return <Cloudy className={className} />;
  }
};

export default WeatherIcon;
