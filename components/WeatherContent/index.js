import {
  getCoordinates,
  getWeatherData,
  setTempUnit,
} from "../../features/weather/weatherSlice";
import Card from "../Card";
import CircleButton from "../CircleButton";
import Footer from "../Footer";
import HighlightCard from "../HighlightCard";
import * as S from "./style";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function WeatherContent() {
  const dispatch = useDispatch();
  const { searchQuery, tempUnit, items } = useSelector(
    (state) => state.weather
  );
  useEffect(() => {
    dispatch(getCoordinates(searchQuery)).then(() => {
      dispatch(getWeatherData());
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <CircleButton
          onClick={() => dispatch(setTempUnit("℃"))}
          active={tempUnit === "℃" ? true : false}
        >
          ℃
        </CircleButton>
        <CircleButton
          onClick={() => dispatch(setTempUnit("℉"))}
          active={tempUnit === "℉" ? true : false}
        >
          ℉
        </CircleButton>
      </S.Header>
      <S.WeeklyWeather>
        {items?.daily &&
          [...Array(5)].map((e, i) => <Card key={i} item={items?.daily[i]} />)}
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
