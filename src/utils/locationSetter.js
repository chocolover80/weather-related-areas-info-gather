export const getLocationToSet = () => {
  const locationToReturn = {
    lat: 0,
    lng: 0,
  };
  navigator.geolocation.getCurrentPosition((position) => {
    locationToReturn.lat = position.coords.latitude;
    locationToReturn.lng = position.coords.longitude;
  });
  return locationToReturn;
};

export const getZoomToSet = () => {
  return 9;
};
