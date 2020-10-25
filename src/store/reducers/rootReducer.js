import { combineReducers } from "redux";
import mapInformation from "./mapInformation";
import citiesWeatherInformation from "./citiesWeatherInformation";
import cityWeatherDetails from "./cityWeatherDetails";
export default combineReducers({
  mapInformation,
  citiesWeatherInformation,
  cityWeatherDetails,
});
