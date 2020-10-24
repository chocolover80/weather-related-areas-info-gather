import { combineReducers } from "redux";
import mapInformation from "./mapInformation";
import citiesWeatherInformation from "./citiesWeatherInformation";
export default combineReducers({
  mapInformation,
  citiesWeatherInformation,
});
