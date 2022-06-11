import React, { useState } from "react";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoordinates,
  getWeatherData,
} from "../../features/weather/weatherSlice";

function SearchList({ setSearchVisible }) {
  const { prevSearchedItems } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    dispatch(getCoordinates(e.target.innerHTML)).then(() => {
      dispatch(getWeatherData());
    });
    setSearchVisible(false);
  };
  return (
    <S.Container>
      {prevSearchedItems.map((item) => (
        <S.ListItem key={item} onClick={onClickHandler}>
          {item}
        </S.ListItem>
      ))}
    </S.Container>
  );
}

export default SearchList;
