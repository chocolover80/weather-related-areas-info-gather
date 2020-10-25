export const setCurrentCityWeatherDetails = (currentCityWeatherDetails) => {
    return {
      type: "SET_CURRENT_CITY_WEATHER_DETAILS",
      currentCityWeatherDetails: currentCityWeatherDetails,
    };
  };
export const setIsShowing = (isShowing) => {
    return {
      type: "SET_IS_SHOWING",
      isShowing: isShowing,
    };
  };