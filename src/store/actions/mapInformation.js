export const setCurrentLocationInfo = (currentLocationInfo) => {
  return {
    type: "SET_CURRENT_LOCATION_INFO",
    currentLocationInfo: currentLocationInfo,
  };
};
export const setCurrentPinInfo = (currentPinInfo) => {
  return {
    type: "SET_CURRENT_PIN_INFO",
    currentPinInfo: currentPinInfo,
  };
};
export const setCurrentZoomInfo = (currentZoomInfo) => {
  return {
    type: "SET_CURRENT_ZOOM_INFO",
    currentZoomInfo: currentZoomInfo,
  };
};
export const setErrors = (errors) => {
  return {
    type: "SET_ERRORS",
    errors: errors,
  };
};
