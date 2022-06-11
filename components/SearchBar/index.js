import { useSelector } from "react-redux";
import SearchForm from "../SearchForm";
import SearchList from "../SearchList";

import * as S from "./style";

function SearchBar({ setSearchVisible }) {
  const { searchQuery } = useSelector((state) => state.weather);

  return (
    <S.SearchBar>
      <SearchForm setSearchVisible={setSearchVisible} />
      <SearchList setSearchVisible={setSearchVisible} />
    </S.SearchBar>
  );
}

export default SearchBar;
