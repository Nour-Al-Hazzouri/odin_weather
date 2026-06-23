import { getWeatherData } from "./weatherData.js";
import "./styles.css";

const form = document.querySelector("form");
form.addEventListener("submit", searchAddressWeather);

function searchAddressWeather(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const address = input.value;
  getWeatherData(address);
}
