export const cityCordinates = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=en`;
  return url;
};
export const weatherData = (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&exclude=minutely,hourly&lang=en`;
  console.log(url);
  return url;
};
