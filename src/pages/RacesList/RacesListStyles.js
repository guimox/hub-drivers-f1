import styled from "styled-components";

export const GeneralOrderList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: hidden;
  flex-wrap: wrap;
  margin-block: 5rem;
  transition: all 0.3s ease-in-out;
  opacity: 0.8;
`;

export const GeneralItemList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background-color: ${(props) => props.theme.backgroundCard};
  padding: 2rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  ul {
    border: solid 2px ${(props) => props.theme.accent};
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
  }

  :hover {
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.textInverted};
    cursor: pointer;

    ul {
      border: solid 2px white;
    }
  }
`;
