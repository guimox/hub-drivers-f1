import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const DriversListStyled = styled.div`
  z-index: 10;
  margin-top: -5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
