import axios from "axios";
const WeatherInfoService = {
  RetrieveWeatherInfoForCities: (latitude, longitude, sorroundingsRange) =>
    axios.get(
      `${process.env.REACT_APP_OWM_SURROUNDINGS_WEATHER_INFO}?lat=${latitude}&lon=${longitude}&cnt=${sorroundingsRange}&APPID=${process.env.REACT_APP_OWM_MAPS_API_KEY}`,
      {
        timeout: 2000,
      }
    ),
};

export default WeatherInfoService;
