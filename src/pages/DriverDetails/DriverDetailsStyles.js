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
  gap: 2rem;
  width: 90%;
  opacity: 0.8;
`;

export const ContentDriverDetails = styled.div`
  max-width: 95rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const ContainerBg = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    filter: grayscale(1);
    opacity: 0.4;
    width: 100vw;
    margin-top: -10rem;
    height: auto;
    object-fit: cover;
  }
`;
