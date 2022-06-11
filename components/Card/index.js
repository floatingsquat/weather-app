import React, { useEffect } from "react";
import * as S from "./style";
import { showWeatherImage } from "../../utils/showWeatherImage";
import { useSelector } from "react-redux";
import { kelvinToC, kelvinToF } from "../../utils/tempConverter";
import useFormatDate from "../../hooks/useFormatDate";
function Card({ item }) {
  const { tempUnit } = useSelector((state) => state.weather);

  return (
    <S.Card>
      <S.Date>{useFormatDate(item.dt)}</S.Date>
      <S.Icon
        width={60}
        height={60}
        src={`/${showWeatherImage(item.weather[0].icon)}`}
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
