
import { GoogleGenAI, Type } from "@google/genai";
import type { WeatherData } from '../types';

const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-2.5-flash";

  const prompt = `
    Provide a complete, realistic weather forecast for the city: "${city}".
    The output must be a single JSON object. Do not include any markdown formatting like \`\`\`json.
    Use the provided schema exactly.
    - "localTime" should be in "HH:mm" format.
    - "isDay" should be true if localTime is between sunrise and sunset.
    - "hourly" forecast must have exactly 8 entries for the next 8 hours.
    - "daily" forecast must have exactly 7 entries for the next 7 days.
    - "day" should be the 3-letter abbreviation (e.g., 'Mon', 'Tue').
    - Pick a plausible WeatherConditionCode from the enum for each forecast.
    - "aqi.quality" must be one of: 'Good', 'Moderate', 'Unhealthy for Sensitive', 'Unhealthy', 'Very Unhealthy', 'Hazardous'.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      location: {
        type: Type.OBJECT,
        properties: {
          city: { type: Type.STRING },
          country: { type: Type.STRING },
          localTime: { type: Type.STRING, description: "HH:mm format" },
        },
      },
      current: {
        type: Type.OBJECT,
        properties: {
          temperature: { type: Type.INTEGER },
          condition: { type: Type.STRING },
          conditionCode: { type: Type.STRING, enum: ['SUNNY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'HEAVY_RAIN', 'THUNDERSTORM', 'SNOW', 'FOG'] },
          feelsLike: { type: Type.INTEGER },
          high: { type: Type.INTEGER },
          low: { type: Type.INTEGER },
          isDay: { type: Type.BOOLEAN },
        },
      },
      hourly: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            time: { type: Type.STRING, description: "HH:mm format" },
            temperature: { type: Type.INTEGER },
            conditionCode: { type: Type.STRING, enum: ['SUNNY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'HEAVY_RAIN', 'THUNDERSTORM', 'SNOW', 'FOG'] },
          },
        },
      },
      daily: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            day: { type: Type.STRING, description: "3-letter abbreviation" },
            high: { type: Type.INTEGER },
            low: { type: Type.INTEGER },
            conditionCode: { type: Type.STRING, enum: ['SUNNY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'HEAVY_RAIN', 'THUNDERSTORM', 'SNOW', 'FOG'] },
          },
        },
      },
      details: {
        type: Type.OBJECT,
        properties: {
          humidity: { type: Type.INTEGER },
          windSpeed: { type: Type.INTEGER, description: "in km/h" },
          uvIndex: { type: Type.INTEGER },
          visibility: { type: Type.INTEGER, description: "in km" },
          sunrise: { type: Type.STRING, description: "HH:mm format" },
          sunset: { type: Type.STRING, description: "HH:mm format" },
        },
      },
      aqi: {
        type: Type.OBJECT,
        properties: {
          value: { type: Type.INTEGER },
          quality: { type: Type.STRING, enum: ['Good', 'Moderate', 'Unhealthy for Sensitive', 'Unhealthy', 'Very Unhealthy', 'Hazardous'] },
        },
      },
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    const weatherData: WeatherData = JSON.parse(jsonText);
    return weatherData;

  } catch (error) {
    console.error("Error fetching weather data from Gemini API:", error);
    throw new Error("Could not fetch weather data. Please check the city name or try again later.");
  }
};

export default fetchWeatherData;
