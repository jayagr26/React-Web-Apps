import React, { useState, useEffect } from "react";
import "./App.css";
import StarDisplay from "./components/StarDisplay";
import PlayNumberDisplay from "./components/PlayNumberDisplay";
import utils from "./utils";

// color theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(
    [...Array(10).keys()].slice(1)
  );
  const [candidateNums, setCandidateNums] = useState([]);
  // const [buttonColors, setButtonColors] = useState(Array(9).fill(colors.available));

  const buttonOnClickHandler = (event) => {
    let buttonValue = Number(event.target.value);

    if (availableNums.includes(buttonValue)) {
      setCandidateNums([...candidateNums, buttonValue]);
      setAvailableNums(availableNums.filter((value) => value !== buttonValue));
    } else if (candidateNums.includes(buttonValue)) {
      setCandidateNums(candidateNums.filter((value) => value !== buttonValue));
      setAvailableNums([...availableNums, buttonValue]);
    }
  };

  const getNumberColors = () => {
    let colors = Array.fill(colors.used);
    availableNums.forEach((value) => (colors[value - 1] = colors.available));
    if (utils.sum(candidateNums) > stars)
      candidateNums.forEach((value) => (colors[value - 1] = colors.wrong));
    else
      candidateNums.forEach((value) => (colors[value - 1] = colors.candidate));
    return colors;
  };

  // useEffect(() => {
  //   let newButtonColors = [...buttonColors];
  //   if (utils.sum(candidateNums) > stars) {
  //     candidateNums.forEach((value) => newButtonColors[value - 1] = colors.wrong);
  //   } else {
  //     candidateNums.forEach((value) => newButtonColors[value - 1] = colors.candidate);
  //   }
  //   setButtonColors(newButtonColors);
  // }, [candidateNums])

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarDisplay count={stars} />
        </div>
        <div className="right">
          <PlayNumberDisplay
            count={stars}
            colors={getNumberColors}
            onClick={buttonOnClickHandler}
          />
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
