const INITIAL_STATE = {
  location: {},
  pin: {},
  zoom: 9,
  errors: "",
};

export default function mapInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_CURRENT_LOCATION_INFO":
      return {
        ...state,
        location: action.currentLocationInfo,
      };
    case "SET_CURRENT_PIN_INFO":
      return {
        ...state,
        pin: action.currentPinInfo,
      };
    case "SET_CURRENT_ZOOM_INFO":
      return {
        ...state,
        zoom: action.currentZoomInfo,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
