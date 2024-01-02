/*This is a gameplay page means when the user is playing the game this page should handle the playing mode.
 */

import { useState } from "react";
import styled from "styled-components";

const GamePlay = ({ toggle }) => {
  //These numbers are written so that we can loop over the array to create the six item in Numbers.
  let numbers = [1, 2, 3, 4, 5, 6];

  // Here we are craeting a loop just to update the selected number in the UI which i will update later in order to check
  //with the number that came out after the random spin of the dice.
  const [selectedNumber, setSelectedNumber] = useState(0);
  let [randomNumber, setRandomNumber] = useState(1);
  let [scored, setScored] = useState(0);

  // Here in this section of code we are makeing the top portion of the screen in which we just have Score the Numbers
  // from which we make our selection and nothing else.

  function IsSelected(num) {
    setSelectedNumber(num);
  }

  function Scored() {
    const min = 1;
    const max = 6;

    console.log(randomNumber);

    setRandomNumber(
      (randomNumber = Math.floor(Math.random() * (max - min + 1)) + min)
    );

    console.log(randomNumber);

    selectedNumber === randomNumber
      ? setScored(scored + 10)
      : setScored(scored - 2);
  }

  function RandomNumber() {
    // const min = 1;
    // const max = 6;
    return (
      <div>
        {randomNumber}
        {/* {setRandomNumber(
          (randomNumber = Math.floor(Math.random() * (max - min + 1)) + min)
        )} */}
      </div>
    );
  }

  function BottomPart() {
    return (
      <BottomPortion>
        <img
          src={
            randomNumber === 1
              ? "./images/dice-six-faces-one_39564.png"
              : randomNumber === 2
              ? "./images/dice-six-faces-two_38562.png"
              : randomNumber === 3
              ? "./images/dice-six-faces-three_39562.png"
              : randomNumber === 4
              ? "./images/dice-six-faces-four_38563.png"
              : randomNumber === 5
              ? "./images/dice-six-faces-five_39565.png"
              : randomNumber === 6
              ? "./images/dice-six-faces-six_39563.png"
              : ""
          }
          alt="dice face"
          onClick={Scored}
        />
      </BottomPortion>
    );
  }
  return (
    //TopPortion is the tag which is styled using the styled component.
    <div>
      <TopPortion>
        <div>
          <h1>{/* <button onClick={Scored}> Press </button> */}</h1>
          <h1>{scored}</h1>
          <div>Total Score</div>
        </div>
        <div className="RightTopCorner">
          <div className="displayNumbers">
            {numbers.map((num, index) => (
              <div
                key={index}
                className={`HorizontalNumbers ${
                  selectedNumber === num ? "selected" : ""
                }`}
                onClick={() => IsSelected(num)}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="SelectNumber">Select Number</div>
        </div>
        <button onClick={toggle}> Home Page </button>
      </TopPortion>
      <BottomPart />
      <RandomNumber />
    </div>
  );
};

export default GamePlay;

const BottomPortion = styled.div`
  margin: 0 auto; /* Sets equal margin on left and right to center the block */
  width: fit-content; /* Optional: Adjust width as needed */
`;

const TopPortion = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin: 10vh;

  .RightTopCorner {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .displayNumbers {
    display: flex;
    padding: 10px;
  }

  .displayNumbers :hover {
    background-color: black;
    color: white;
    transition: color 0.5s ease;
    cursor: pointer;
  }
  .HorizontalNumbers {
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px solid black;
    margin: 4px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
  }
  .selected {
    background-color: black;
    color: white;
  }
`;
