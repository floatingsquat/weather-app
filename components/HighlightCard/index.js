import React from "react";
import * as S from "./style";
import ProgressBar from "../ProgressBar";
import { getWindDirection } from "../../utils/getWindDirection";
function HighlightCard({ type, title, description, unit, wind_deg }) {
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
            <S.Image src="wind-direction.svg" wind_deg={wind_deg} alt="wind" />
          </S.ImgWrapper>
          <S.Span>{getWindDirection(wind_deg)}</S.Span>
        </S.Data>
      ) : type === "humidity" ? (
        <S.Data>
          <ProgressBar percentages={description} />
        </S.Data>
      ) : (
        " "
      )}
    </S.HighlightCard>
  );
}

export default HighlightCard;
