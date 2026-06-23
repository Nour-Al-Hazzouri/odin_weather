import elementsCreate from "./elementsCreator.js";

function renderWeatherData(
  address,
  currentCondition,
  currentHumidity,
  currentTemp,
  currentWindSpeed,
) {
  const queriedSection = document.querySelector("section");
  if (queriedSection) queriedSection.remove();
  const body = document.querySelector("body");
  const forecastSection = document.createElement("section");
  forecastSection.id = "forecast";
  const conditionLower = currentCondition.toLowerCase();
  if (conditionLower.includes("snow")) {
    forecastSection.classList.add("snowy");
  } else if (
    conditionLower.includes("rain") ||
    conditionLower.includes("drizzle") ||
    conditionLower.includes("storm")
  ) {
    forecastSection.classList.add("rainy");
  } else if (
    conditionLower.includes("cloud") ||
    conditionLower.includes("overcast")
  ) {
    forecastSection.classList.add("cloudy");
  } else if (conditionLower.includes("night")) {
    forecastSection.classList.add("night");
  } else if (
    conditionLower.includes("clear") ||
    conditionLower.includes("sun")
  ) {
    forecastSection.classList.add("sunny");
  }
  body.append(forecastSection);
  const forecastP = elementsCreate("p", 3);
  const forecastTitles = elementsCreate("p", 4);
  const splitDiv = document.createElement("div");
  const forecastDiv = elementsCreate("div", 4);
  const forecastH2 = document.createElement("h2");
  const forecastH3 = document.createElement("h3");
  const humidityP = forecastP[0];
  const tempP = forecastP[1];
  const windSpeedP = forecastP[2];
  const conditionDiv = forecastDiv[0];
  const humidityDiv = forecastDiv[1];
  const tempDiv = forecastDiv[2];
  const windSpeedDiv = forecastDiv[3];
  const currentWeatherTemp = forecastTitles[0];
  currentWeatherTemp.textContent = "Temp (°C)";
  const currentWeatherHumidity = forecastTitles[1];
  currentWeatherHumidity.textContent = "Humidity (%)";
  const currentWeatherWindSpeed = forecastTitles[2];
  currentWeatherWindSpeed.textContent = "Wind Speed (Km/h)";
  const currentWeatherCondition = forecastTitles[3];
  currentWeatherCondition.textContent = "Condition";

  forecastH2.textContent = address;
  forecastH3.textContent = currentCondition;
  humidityP.textContent = currentHumidity;
  tempP.textContent = currentTemp;
  windSpeedP.textContent = currentWindSpeed;
  conditionDiv.append(currentWeatherCondition, forecastH3);
  tempDiv.append(currentWeatherTemp, tempP);
  humidityDiv.append(currentWeatherHumidity, humidityP);
  splitDiv.append(conditionDiv, tempDiv, windSpeedDiv, humidityDiv);
  windSpeedDiv.append(currentWeatherWindSpeed, windSpeedP);

  forecastSection.append(forecastH2, splitDiv);
}

export default renderWeatherData;
