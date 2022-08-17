import styled from "styled-components";

export const Card = styled.div`
  border-radius: 5px;
  margin: auto;
  max-width: 20rem;
  padding: 3rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background: ${(props) => props.theme.backgroundCard};
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    img {
      filter: grayscale(1);
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    border-radius: 5px;
    width: 15rem;
    height: 20rem;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    border-radius: 5px;
    border: none;
    padding: 1rem;
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.textInverted};

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;
