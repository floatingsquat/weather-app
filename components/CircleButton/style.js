import styled from "styled-components";

const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  margin-right: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${(props) => (props.active ? "#E7E7EB" : "#585676")};
  color: ${(props) => (props.active ? "black" : "white")};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
  svg {
    color: #e7e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
  }
`;

export { CircleButton };
