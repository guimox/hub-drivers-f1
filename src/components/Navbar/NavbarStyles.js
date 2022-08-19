import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.accent};
  position: fixed;
  z-index: 999;

  button {
    padding: 0.5rem 1rem;
    background: transparent;
    color: ${(props) => props.theme.textInverted};
  }

  svg {
    fill: ${(props) => props.theme.textInverted};
  }
`;
