import styled from "styled-components";

export const GameBoard = styled.div`
  display: grid;
  width: 60%;
  margin: auto;
  height: 50vh;
  grid-gap: 10%;
  grid-template-areas:
    "paper . scissors"
    ". rock .";
  justify-content: center;
`;
