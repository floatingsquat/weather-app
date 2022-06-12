import {
  getCoordinates,
  getWeatherData,
} from "../../features/weather/weatherSlice";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";

function SearchList({ setSearchVisible }) {
  const { prevSearchedItems } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const onClickHandler = (item) => {
    dispatch(getCoordinates(item)).then(() => {
      dispatch(getWeatherData());
      console.log("calisti");
    });
    setSearchVisible(false);
  };
  return (
    <S.Container>
      {prevSearchedItems.map((item) => (
        <S.ListItem key={item} onClick={() => onClickHandler(item)}>
          {item}
        </S.ListItem>
      ))}
    </S.Container>
  );
}

export default SearchList;
