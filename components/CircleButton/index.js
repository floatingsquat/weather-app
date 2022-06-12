import * as S from "./style";
import React from "react";

function CircleButton({ icon, children, ...props }) {
  return (
    <S.CircleButton {...props}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.CircleButton>
  );
}

export default CircleButton;
