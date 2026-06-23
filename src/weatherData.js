import renderWeatherData from "./renderWeatherData.js";
import { fetchWeatherData } from "./weatherQuery.js";

async function getWeatherData(address) {
  const data = await fetchWeatherData(address);
  const currentAddress = data.address;
  const currentCondition = data.currentConditions.conditions;
  const currentHumidity = data.currentConditions.humidity;
  const currentTemp = data.currentConditions.temp;
  const currentWindSpeed = data.currentConditions.windspeed;
  renderWeatherData(
    currentAddress,
    currentCondition,
    currentHumidity,
    currentTemp,
    currentWindSpeed,
  );
}
export { getWeatherData };
