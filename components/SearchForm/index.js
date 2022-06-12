import {
  getCoordinates,
  getWeatherData,
  setSearchQuery,
  setPrevSearchedItems,
} from "../../features/weather/weatherSlice";
import * as S from "./style";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function SearchForm({ setSearchVisible }) {
  const { searchQuery } = useSelector((state) => state.weather);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(setPrevSearchedItems(query));
    dispatch(getCoordinates(searchQuery)).then(() => {
      dispatch(getWeatherData());
    });
    setSearchVisible(false);
  };

  useEffect(() => {
    dispatch(setSearchQuery(query));
  }, [query]); // not best solution -> must change the logic (maybe useRef?)
  return (
    <S.Container>
      <S.CloseButton onClick={() => setSearchVisible(false)}>
        <AiOutlineClose />
      </S.CloseButton>
      <S.Form>
        <S.InputWrapper>
          <S.Input
            placeholder="search location"
            onChange={(e) => setQuery(e.target.value)}
          />
        </S.InputWrapper>
        <S.Button onClick={onClickHandler}>Search</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default SearchForm;
