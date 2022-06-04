import React from "react";
import * as S from "./style";
function Card() {
  return (
    <S.Card>
      <S.Date>Sun, 7 Jun</S.Date>
      <S.Image />
      <S.TempWrapper>
        <S.Day>16°C</S.Day>
        <S.Night>6°C</S.Night>
      </S.TempWrapper>
    </S.Card>
  );
}

export default Card;
