import SearchForm from "../SearchForm";
import SearchList from "../SearchList";

import * as S from "./style";

function SearchBar() {
  return (
    <S.SearchBar>
      <SearchForm />
      <SearchList />
    </S.SearchBar>
  );
}

export default SearchBar;
