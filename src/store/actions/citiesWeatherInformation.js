export const setCurrentWeatherInfoList = (currentWeatherInfoList) => {
  return {
    type: "SET_CURRENT_WEATHER_INFO_LIST",
    currentWheatherInfoList: currentWeatherInfoList,
  };
};
export const setErrors = (errors) => {
    return {
      type: "SET_WEATHER_INFO_GATHER_ERRORS",
      errors: errors,
    };
  };
