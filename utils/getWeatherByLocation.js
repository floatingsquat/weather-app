export const getWeatherDataByUserLocation = (
  data,
  errorHandler,
  forceSearch = false
) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      data.byCoords(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      if (forceSearch) {
        data.byName();
      }
      errorHandler({
        status: true,
        message: error.message,
      });
      setTimeout(() => {
        errorHandler({ status: false, message: "" });
      }, 3000);
    }
  );
};
