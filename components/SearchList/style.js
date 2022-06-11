import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  margin-left: 46px;
  margin-right: 46px;
  margin-bottom: 58px;
`;

const ListItem = styled.button`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  height: 64px;
  width: 100%;
  background-color: transparent;
  border: 0;
  color: #e7e7eb;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 12px;

  &:hover {
    border: 1px solid #616475;
    cursor: pointer;
  }
`;

export { Container, ListItem };
