import React, { useEffect } from "react";
import Card from "../Card";
import CircleButton from "../CircleButton";
import HighlightCard from "../HighlightCard";
import Footer from "../Footer";
import * as S from "./style";

import { useDispatch, useSelector } from "react-redux";
import {
  getCoordinates,
  getWeatherData,
  setTempUnit,
} from "../../features/weather/weatherSlice";
function WeatherContent() {
  const dispatch = useDispatch();
  const { searchQuery, tempUnit, items } = useSelector(
    (state) => state.weather
  );
  useEffect(() => {
    console.log("itemmm", items);
    dispatch(getCoordinates(searchQuery)).then(() => {
      dispatch(getWeatherData());
    });
  }, []);

  const setUnitOnClickHandler = (e) => {
    dispatch(setTempUnit(e.target.innerHTML.replace("<!-- -->", "")));
  };
  return (
    <S.Wrapper>
      <S.Header>
        <CircleButton
          onClick={setUnitOnClickHandler}
          active={tempUnit === "℃" ? true : false}
        >
          ℃
        </CircleButton>
        <CircleButton
          onClick={setUnitOnClickHandler}
          active={tempUnit === "℉" ? true : false}
        >
          ℉
        </CircleButton>
      </S.Header>
      <S.WeeklyWeather>
        {items?.daily && (
          <>
            <Card item={items?.daily[0]} />
            <Card item={items?.daily[1]} />
            <Card item={items?.daily[2]} />
            <Card item={items?.daily[3]} />
            <Card item={items?.daily[4]} />
          </>
        )}
      </S.WeeklyWeather>
      <S.Title>Today’s Hightlights</S.Title>
      <S.WeatherDetail>
        <HighlightCard
          type="wind"
          title="Wind"
          description={items?.current?.wind_speed}
          wind_deg={items?.current?.wind_deg}
          unit="mph"
        />
        <HighlightCard
          type="humidity"
          title="Humidity"
          description={items?.current?.humidity}
          unit="%"
          item={items}
        />
        <HighlightCard
          title="Visibility"
          description={items?.current?.visibility}
          unit="miles"
        />
        <HighlightCard
          title="Air Pressure"
          description={items?.current?.pressure}
          unit="mb"
        />
      </S.WeatherDetail>
      <Footer />
    </S.Wrapper>
  );
}

export default WeatherContent;
