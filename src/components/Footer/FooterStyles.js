import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: ${(props) => props.theme.backgroundCard};
  position: absolute;
  padding-block: 1rem;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme.text};

  a {
    text-decoration: none;
  }

  svg {
    opacity: 0.5;
    fill: ${(props) => props.theme.accent};
    :hover {
      cursor: pointer;
    }
  }
`;
