// This page is the starting page of the game means when the user opens up the game he should see this page as the first page where he can click on the play now to start playing the game.

import React from "react";
import styled from "styled-components"; // This is how we can apply the style in react using the styled components but first we have to import all the necessary packages to run the styled component package.

//toggel just toggles the state of the game.
const StartGame = ({ toggle }) => {
  return (
    //Here we have cated the Container tag which holds all the first page information where user can start to play the game
    //This page accepts the toggle as prop which toggles the state of the game if mode of the GameaPlay is then it toggles the mode to the start screen and vice-versa.
    <Container>
      <div>
        <img src="/images/dicess.png" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
// This is a way to style our component just create a const component and styled.div`Here write all your`here write all your css styles`
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  /* Ensures the image scales down to fit within the container */
  img {
    max-width: 50%;
    max-height: 50%;
    height: auto;
    width: auto;
  }
  .content {
    h1 {
      font-size: 66px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  display: flex;
  border-radius: 5px;
  border: 1px solid transparent;
  padding-left: 40px;
  padding-right: 40px;
  transition: 0.3s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
