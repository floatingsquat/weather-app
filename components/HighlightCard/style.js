import styled from "styled-components";

const HighlightCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  background: #1e213a;
  width: 328px;
  height: ${(props) => (props.type ? "204px" : "160px")};

  @media (max-width: 809px) {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 16px;
  margin-right: 0.5rem;
  transition: transform 1s ease;
  margin: auto;
  transform: ${(props) => `rotate(${props.wind_deg}deg)`};
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #e7e7eb;
`;
const Description = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  color: #e7e7eb;
`;
const Unit = styled.span`
  font-size: 36px;
  font-weight: 500;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
`;
const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #e7e7eb;
`;

export {
  HighlightCard,
  Title,
  Description,
  Unit,
  Data,
  ImgWrapper,
  Span,
  Image,
};
