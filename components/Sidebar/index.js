import * as S from "./style";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { kelvinToC, kelvinToF } from "../../utils/tempConverter";
import { formatLocation } from "../../utils/formatLocation";
import { ToCapitalize } from "../../utils/toCapitalize";
import useFormatDate from "../../hooks/useFormatDate";
import { showWeatherImage } from "../../utils/showWeatherImage";

function Sidebar() {
  const { items, tempUnit } = useSelector((state) => state.weather);
  const [searchVisible, setSearchVisible] = useState(false);
  const currentDay = useFormatDate();
  return (
    <S.Sidebar>
      {!searchVisible ? (
        <>
          <S.Filter>
            <S.SearchBtn onClick={() => setSearchVisible(!searchVisible)}>
              Search for places
            </S.SearchBtn>
            <S.LocationBtn>
              <BiCurrentLocation />
            </S.LocationBtn>
          </S.Filter>
          <S.WeatherToday>
            <S.ImgWrapper>
              <S.ConditionImg
                width={202}
                height={200}
                src={`/${showWeatherImage(items?.current?.weather[0].icon)}`}
                // src={`/`}
              />
            </S.ImgWrapper>

            <S.TempDegree>
              {tempUnit === "℃"
                ? kelvinToC(items?.current?.temp)
                : kelvinToF(items?.current?.temp)}
              <S.Degree>{tempUnit}</S.Degree>
            </S.TempDegree>
            <S.WeatherCondition>
              {items?.current?.weather[0]?.description &&
                ToCapitalize(items.current.weather[0].description)}
            </S.WeatherCondition>
          </S.WeatherToday>
          <S.DateWrapper>
            <S.Span>Today </S.Span> . <S.Span>{currentDay}</S.Span>
          </S.DateWrapper>
          <S.Location>
            <MdLocationPin />
            {items.timezone && formatLocation(items.timezone)}
          </S.Location>
        </>
      ) : (
        <SearchBar setSearchVisible={setSearchVisible} />
      )}
    </S.Sidebar>
  );
}

export default Sidebar;
