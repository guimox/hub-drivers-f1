import styled from "styled-components";

export const SearchBarStyled = styled.input`
  width: 25rem;
  padding: 1rem;
  margin: inherit;
  z-index: 5;
  border-radius: 5px;
  border: none;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    width: 15rem;
  }
`;
