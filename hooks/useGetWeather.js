import { useState } from "react";

const useGetWeather = () => {
  const getWeatherByName = async (cityName = "New York") => {
    let coordinates = await getCoordinates(cityName);
    try {
      await getFullWeatherDataFromApi(coordinates.lat, coordinates.lon);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherByCoordinates = async (latitude, longitude) => {
    try {
      await getWeatherData(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const getCoordinates = async (city) => {
    let coordinates;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=en`;
    try {
      const res = await fetch(url);
      const weatherInfos = await res.json();
      coordinates = weatherInfos.coord;
    } catch (error) {
      console.log(error);
    }
    return coordinates;
  };

  const getWeatherData = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&exclude=minutely,hourly&lang=en`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      const { temp, weather } = data.current;
      const locationName = formatLocation(data.timezone);
      const weatherDescription = toCapitalize(weather[0].description);
      const { tempF, tempC } = tempConverter(temp);

      const hightlightsToday = getHightLightsToday(
        initialFullWeatherData,
        data
      );

      const forecastsForFiveDays = getForecasts(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetWeather;
