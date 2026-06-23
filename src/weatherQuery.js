function fetchWeatherData(address) {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?unitGroup=metric&key=M3HKV7JY2PGXUT7Q988PE7MBY&contentType=json`,
  )
    .then((response) => {
      if (!response.ok) {
        alert(`Ensure you typed a correct city name!`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error! " + error.message);
      throw error;
    });
}
export { fetchWeatherData };
