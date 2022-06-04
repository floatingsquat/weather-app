import React from "react";
import * as S from "./style";
function CircleButton({ icon, children, ...props }) {
  return (
    <S.CircleButton {...props}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.CircleButton>
  );
}

export default CircleButton;
