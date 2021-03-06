import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 18px;
  padding-bottom: 18px;
  width: 120px;
  height: 177px;
  background: #1e213a;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
const Date = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #e7e7eb;
`;
const Icon = styled(Image)`
  height: 100%;
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10px;
  margin-bottom: 31px;

  border: 0;
`;
const TempWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const Day = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
`;
const Night = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a09fb1;
`;

export { Card, Date, Icon, TempWrapper, Day, Night };
