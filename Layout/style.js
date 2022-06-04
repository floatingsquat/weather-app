import styled from "styled-components";
import { breakPoint } from "../utils/breakpoints";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: #100e1d;

  @media (max-width: 809px) {
    flex-direction: column;
  }
`;

export { ContentWrapper };
