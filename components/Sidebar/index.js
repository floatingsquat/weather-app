import * as S from "./style";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
function Sidebar() {
  return (
    <S.Sidebar>
      <S.Filter>
        <S.SearchBtn>Search for places</S.SearchBtn>
        <S.LocationBtn>
          <BiCurrentLocation />
        </S.LocationBtn>
      </S.Filter>
      <S.WeatherToday>
        <S.ImgWrapper>
          <S.ConditionImg />
        </S.ImgWrapper>

        <S.TempDegree>
          15<S.Degree>℃</S.Degree>
        </S.TempDegree>
        <S.WeatherCondition>Shower</S.WeatherCondition>
      </S.WeatherToday>
      <S.DateWrapper>
        <S.Span>Today </S.Span> . <S.Span> Fri, 5 Jun</S.Span>
      </S.DateWrapper>
      <S.Location>
        <MdLocationPin />
        Helsinki
      </S.Location>
    </S.Sidebar>
  );
}

export default Sidebar;
