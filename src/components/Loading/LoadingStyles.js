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
  animation: ${fadeIn} 3s infinite ease-in-out;
  margin-top: 10rem;
`;
