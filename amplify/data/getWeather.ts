import type { Schema } from "./resource";

export const handler: Schema["getWeather"]["functionHandler"] = async (
  event,
) => {
  const apiKey = "3eba3b19037c07b45d07f6e0fda76e71";

  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey}&units=f&query=${encodeURIComponent(
      event.arguments.city ?? ""
    )}`
  );

  const weather = await res.json();

  return {
    value: weather.current.temperature,
    unit: weather.request.unit,
  };
};
