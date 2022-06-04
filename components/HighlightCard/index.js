import React from "react";
import * as S from "./style";
import ProgressBar from "../ProgressBar";
function HighlightCard({ type, title, description, unit }) {
  return (
    <S.HighlightCard type={type}>
      <S.Title>{title}</S.Title>
      <S.Description>
        {description}
        <S.Unit> {unit}</S.Unit>
      </S.Description>

      {type === "wind" ? (
        <S.Data>
          <S.ImgWrapper>
            <S.Image src="wind-direction.svg" alt="wind" />
          </S.ImgWrapper>
          <S.Span>TEST</S.Span>
        </S.Data>
      ) : type === "humidity" ? (
        <S.Data>
          <ProgressBar />
        </S.Data>
      ) : (
        " "
      )}
    </S.HighlightCard>
  );
}

export default HighlightCard;
