import styled from "styled-components";

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background: #1e213a;

  @media (max-width: 809px) {
    width: 100%;
    height: auto;
  }
`;

export { SearchBar };
