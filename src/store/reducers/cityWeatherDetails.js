const INITIAL_STATE = {
  currentCityWeatherDetails: {},
  isShowing: false,
};

export default function cityWeatherDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_CURRENT_CITY_WEATHER_DETAILS":
      return {
        ...state,
        currentCityWeatherDetails: action.currentCityWeatherDetails,
      };
    case "SET_IS_SHOWING":
      return {
        ...state,
        isShowing: action.isShowing,
      };

    default:
      return state;
  }
}
