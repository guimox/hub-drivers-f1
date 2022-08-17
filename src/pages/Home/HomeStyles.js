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
  margin: auto;
  margin-block: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.4s ease-in-out;

  h1 {
    color: ${(props) => props.theme.accent};
    font-size: clamp(1.5rem, 2vw + 5rem, 15rem);
    text-align: center;
    letter-spacing: -0.2rem;
    margin-bottom: -2rem;
  }

  h4 {
    color: ${(props) => props.theme.text};
    font-size: clamp(0.5rem, 1vw + 0.5rem, 10rem);
    text-align: center;
    margin-top: 2rem;
    margin-bottom: -2rem;
    letter-spacing: -0.1rem;
  }
`;

export const HeroBg = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  filter: grayscale(1);
  opacity: 0.4;
  width: 100vw;
  height: auto;
  object-fit: cover;
`;
