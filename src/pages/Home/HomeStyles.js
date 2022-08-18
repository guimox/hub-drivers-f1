import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.4s ease-in-out;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const HeroContent = styled.div`
  margin: 0;
  margin-block: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.4s ease-in-out;

  h1 {
    font-style: italic;
    color: ${(props) => props.theme.accent};
    font-size: clamp(1rem, 1vw + 6rem, 10rem);
    text-align: center;
    letter-spacing: -0.2rem;
    margin-bottom: -1rem;

    @media screen and (max-width: 768px) {
      margin-bottom: unset;
    }
  }

  h2 {
    color: ${(props) => props.theme.text};
    font-size: clamp(1rem, 1vw + 4rem, 10rem);
    text-align: center;
    letter-spacing: -0.2rem;
    font-style: italic;
  }

  p {
    color: ${(props) => props.theme.text};
    font-size: clamp(0.5rem, 1vw + 0.5rem, 10rem);
    text-align: center;
    margin-top: 1rem;
    margin-bottom: -2rem;
  }
`;

export const HeroBg = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  filter: grayscale(1);
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
