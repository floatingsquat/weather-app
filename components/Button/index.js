import React from "react";
import * as S from "./style";
function Button(icon, children, ...props) {
  return (
    <S.Button {...props}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.Button>
  );
}

export default Button;
