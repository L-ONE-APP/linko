
import React from 'react';
import type { WeatherDetailsData, AQIData } from '../types';

interface WeatherDetailsProps {
  data: WeatherDetailsData;
  aqi: AQIData;
}

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-4 ${className}`}>
    {children}
  </div>
);

const DetailItem: React.FC<{ title: string, value: string | number, unit?: string }> = ({ title, value, unit }) => (
  <div className="bg-white/10 rounded-lg p-4 flex flex-col justify-between">
    <h3 className="text-sm font-bold uppercase text-white/70">{title}</h3>
    <div>
      <span className="text-2xl lg:text-3xl font-semibold">{value}</span>
      {unit && <span className="text-md ml-1">{unit}</span>}
    </div>
  </div>
);


const getAQIColor = (value: number) => {
    if (value <= 50) return 'bg-green-500';
    if (value <= 100) return 'bg-yellow-500';
    if (value <= 150) return 'bg-orange-500';
    if (value <= 200) return 'bg-red-500';
    if (value <= 300) return 'bg-purple-500';
    return 'bg-maroon-500';
}

const AQIIndicator: React.FC<{aqi: AQIData}> = ({aqi}) => {
    const progress = Math.min((aqi.value / 200) * 100, 100); // Capped at 200 for visual scale
    const colorClass = getAQIColor(aqi.value);
    return (
        <div className="bg-white/10 rounded-lg p-4 col-span-2">
            <h3 className="text-sm font-bold uppercase text-white/70 mb-2">Air Quality Index</h3>
            <div className="flex items-center gap-4">
                <span className="text-3xl font-semibold">{aqi.value}</span>
                <span className={`text-sm font-bold px-2 py-1 rounded-full text-white ${colorClass}`}>{aqi.quality}</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full mt-3">
                <div className={`h-2 rounded-full ${colorClass}`} style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data, aqi }) => {
  return (
    <Card>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DetailItem title="Humidity" value={data.humidity} unit="%" />
        <DetailItem title="Wind" value={data.windSpeed} unit="km/h" />
        <DetailItem title="UV Index" value={data.uvIndex} />
        <DetailItem title="Visibility" value={data.visibility} unit="km" />
        <DetailItem title="Sunrise" value={data.sunrise} />
        <DetailItem title="Sunset" value={data.sunset} />
        <AQIIndicator aqi={aqi}/>
      </div>
    </Card>
  );
};

export default WeatherDetails;
