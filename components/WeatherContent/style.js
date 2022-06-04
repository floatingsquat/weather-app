import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 154px;
  margin-right: 124px;
  width: 981px;

  @media (max-width: 809px) {
    align-items: center;
    justify-content: center;
    width: 75%;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  display: flex;
  height: 148px;
  justify-content: flex-end;
  margin-top: 42px;
`;
const WeeklyWeather = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  gap: 26px;
`;
const Title = styled.h2`
  margin-top: 72px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #e7e7eb;
`;
const WeatherDetail = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
`;

export { Wrapper, Header, WeeklyWeather, Title, WeatherDetail };
