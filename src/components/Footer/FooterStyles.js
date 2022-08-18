import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: ${(props) => props.theme.backgroundCard};
  position: absolute;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
`;
