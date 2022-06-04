import React from "react";
import Card from "../Card";
import CircleButton from "../CircleButton";
import HighlightCard from "../HighlightCard";
import Footer from "../Footer";
import * as S from "./style";
function WeatherContent() {
  return (
    <S.Wrapper>
      <S.Header>
        <CircleButton active="true">℃</CircleButton>
        <CircleButton>℉</CircleButton>
      </S.Header>
      <S.WeeklyWeather>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.WeeklyWeather>
      <S.Title>Today’s Hightlights</S.Title>
      <S.WeatherDetail>
        <HighlightCard type="wind" title="Wind" description="2" unit="mph" />
        <HighlightCard
          type="humidity"
          title="Humidity"
          description="74"
          unit="%"
        />
        <HighlightCard title="Visibility" description="6,4" unit="miles" />
        <HighlightCard title="Air Pressure" description="1007" unit="mb" />
      </S.WeatherDetail>
      <Footer />
    </S.Wrapper>
  );
}

export default WeatherContent;
