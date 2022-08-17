import styled from "styled-components";

export const CloseButton = styled.button`
  background: ${(props) => props.theme.accent};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.textInverted};
  margin-block: 5rem 2rem;
`;

export const ContainerDriverAndGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentDriverDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerBg = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vh;
  width: 100%;

  img {
    filter: grayscale(1);
    opacity: 0.4;
    width: 100vw;
    height: auto;
    object-fit: cover;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      height: 100vh;
    }
  }
`;
