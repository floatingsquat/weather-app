import React from "react";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";

function SearchForm() {
  return (
    <S.Container>
      <S.CloseButton>
        <AiOutlineClose />
      </S.CloseButton>
      <S.Form>
        <S.InputWrapper>
          <S.Input placeholder="search location" />
        </S.InputWrapper>
        <S.Button>Search</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default SearchForm;
