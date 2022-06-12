import * as S from "./style";
import React from "react";

function ProgressBar({ percentages }) {
  return (
    <S.Container>
      <S.Percentages>
        <S.Line>0</S.Line>
        <S.Line>50</S.Line>
        <S.Line>100</S.Line>
      </S.Percentages>
      <S.ProgressBar percentages={`${percentages}%`} />
    </S.Container>
  );
}

export default ProgressBar;
