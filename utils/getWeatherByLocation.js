export const getWeatherDataByUserLocation = (data) => {
  navigator.geolocation.getCurrentPosition((position) => {
    data.byCoords(position.coords.latitude, position.coords.longitude);
    dispatch(getWeatherData(geoLocation));
  });
};
