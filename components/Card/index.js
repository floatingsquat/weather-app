import useFormatDate from "../../hooks/useFormatDate";
import { showWeatherImage } from "../../utils/showWeatherImage";
import { kelvinToC, kelvinToF } from "../../utils/tempConverter";
import * as S from "./style";
import React from "react";
import { useSelector } from "react-redux";

function Card({ item }) {
  const { tempUnit } = useSelector((state) => state.weather);

  return (
    <S.Card>
      <S.Date>{useFormatDate(item.dt)}</S.Date>
      <S.Icon
        width={60}
        height={60}
        src={`/assets/${showWeatherImage(item.weather[0].icon)}`}
      />
      <S.TempWrapper>
        <S.Day>
          {" "}
          {tempUnit === "℃"
            ? kelvinToC(item.temp.min)
            : kelvinToF(item.temp.min)}
          {tempUnit}
        </S.Day>
        <S.Night>
          {" "}
          {tempUnit === "℃"
            ? kelvinToC(item.temp.max)
            : kelvinToF(item.temp.max)}
          {tempUnit}
        </S.Night>
      </S.TempWrapper>
    </S.Card>
  );
}

export default Card;
