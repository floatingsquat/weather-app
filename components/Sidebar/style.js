import styled, { css } from "styled-components";
import { breakPoint } from "../../utils/breakpoints";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: #1e213a;
  padding-top: 42px;
  width: 35%;
  height: 100%;
  min-height: 1024px;
  height: auto;
  @media (max-width: 809px) {
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const SearchBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  width: 161px;
  height: 40px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  margin-left: 46px;

  &:hover {
    cursor: pointer;
  }
`;
const LocationBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 55px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }
  svg {
    color: #e7e7eb;
    ${flexCenter};
    width: 28px;
    height: 28px;
  }
`;

const WeatherToday = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 87px;
`;
const ImgWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 100%
    ),
    url("Cloud-background.png");
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: 130%;
`;
const ConditionImg = styled.span`
  width: 202px;
  height: 234px;
  margin-top: 109px;
  background: url("LightRain.png");
  background-repeat: no-repeat;
  border: 0;
`;
const TempDegree = styled.span`
  font-weight: 500;
  font-size: 144px;
  line-height: 169px;
  color: #e7e7eb;
`;
const Degree = styled.span`
  font-weight: 100;
  font-size: 48px;
  line-height: 56px;
  color: #e7e7eb;
`;
const WeatherCondition = styled.div`
  width: 129px;
  height: 42px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #a09fb1;
  margin-bottom: 87px;
`;
const DateWrapper = styled.div`
  ${flexCenter};
  gap: 39px;
  color: #88869d;
  font-size: 30px;
`;
const Span = styled.span`
  ${flexCenter};
  width: 51px;
  height: 21px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
  white-space: nowrap;
`;
const Location = styled.div`
  ${flexCenter};
  margin-top: 32px;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #88869d;
`;

export {
  Sidebar,
  Filter,
  SearchBtn,
  LocationBtn,
  WeatherToday,
  ImgWrapper,
  ConditionImg,
  TempDegree,
  Degree,
  WeatherCondition,
  DateWrapper,
  Span,
  Location,
};
