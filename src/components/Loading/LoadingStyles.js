import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const LoadingWrapper = styled.div`
  animation: ${fadeIn} 0.2s infinite ease-in-out;
  width: 10rem;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
