import { getWeatherData } from "../../features/weather/weatherSlice";
import useFormatDate from "../../hooks/useFormatDate";
import { formatLocation } from "../../utils/formatLocation";
import { showWeatherImage } from "../../utils/showWeatherImage";
import { kelvinToC, kelvinToF } from "../../utils/tempConverter";
import { ToCapitalize } from "../../utils/toCapitalize";
import CircleButton from "../CircleButton";
import SearchBar from "../SearchBar";
import * as S from "./style";
import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const { items, tempUnit } = useSelector((state) => state.weather);
  const [searchVisible, setSearchVisible] = useState(false);
  const currentDay = useFormatDate();
  const dispatch = useDispatch();
  const weatherByLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geoLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      dispatch(getWeatherData(geoLocation));
    });
  };
  return (
    <S.Sidebar>
      {!searchVisible ? (
        <>
          <S.Filter>
            <S.SearchBtn onClick={() => setSearchVisible(!searchVisible)}>
              Search for places
            </S.SearchBtn>
            <CircleButton onClick={weatherByLocation}>
              <BiCurrentLocation />
            </CircleButton>
          </S.Filter>
          <S.WeatherToday>
            <S.ImgWrapper>
              <S.ConditionImg
                width={202}
                height={200}
                src={`/assets/${showWeatherImage(
                  items?.current?.weather[0].icon
                )}`}
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
