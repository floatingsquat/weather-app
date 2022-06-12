import styled from "styled-components";

const Container = styled.div``;
const Percentages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
`;
const Line = styled.span`
  color: #e7e7eb;
  font-size: 12px;
  font-weight: 600;
`;
const ProgressBar = styled.div`
  position: relative;
  height: 8px;
  background-color: #e7e7eb;
  border-radius: 10px;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${(props) => props.percentages};
    border-radius: 6px;
    transition: width 1s ease;
    background: #ffec65;
  }
  &::before {
    position: absolute;
    content: "%";
    color: #e7e7eb;
    font-size: 12px;
    font-weight: 700;

    right: 0;
    top: 10px;
  }
`;

export { Container, Percentages, Line, ProgressBar };
