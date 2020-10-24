const INITIAL_STATE = {
  currentWeatherInfoList: {},
  errors: "",
};

export default function mapInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_CURRENT_WEATHER_INFO_LIST":
      return {
        ...state,
        currentWeatherInfoList: action.currentWheatherInfoList,
      };
    case "SET_WEATHER_INFO_GATHER_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    default:
      return state;
  }
}
