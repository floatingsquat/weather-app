import React from "react";
import * as S from "./style";
function ProgressBar({ percentages }) {
  percentages = 50;
  return (
    <S.Container percentages={`${percentages.toString()}%`}>
      <S.Percentages>
        <S.Line>0</S.Line>
        <S.Line>50</S.Line>
        <S.Line>100</S.Line>
      </S.Percentages>
      <S.ProgressBar />
    </S.Container>
  );
}

export default ProgressBar;
