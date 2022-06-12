import styled from "styled-components";

const Container = styled.div`
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
`;
const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #e7e7eb;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 46px;
  margin-right: 20px;
  font-size: 28px;

  &:hover {
    cursor: pointer;
  }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 46px;
  gap: 12px;
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  border: 1px solid #e7e7eb;
  padding-left: calc(1em + 10px + 8px);
  background: url("assets/search-icon.svg") no-repeat left;
  background-size: 26px;

  &:focus {
    outline: none;
    color: white;
  }
`;
const Button = styled.button`
  width: 86px;
  height: 48px;
  border: 0;
  background: #3c47e9;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #e7e7eb;

  &:hover {
    cursor: pointer;
  }
`;

export { Container, Form, Input, Button, CloseButton, InputWrapper };
