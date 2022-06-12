import SearchForm from "../SearchForm";
import SearchList from "../SearchList";
import * as S from "./style";

function SearchBar({ setSearchVisible }) {
  return (
    <S.SearchBar>
      <SearchForm setSearchVisible={setSearchVisible} />
      <SearchList setSearchVisible={setSearchVisible} />
    </S.SearchBar>
  );
}

export default SearchBar;
