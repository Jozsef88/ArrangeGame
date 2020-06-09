import React, { useState } from 'react';
import './App.css';

  const pos1 = {top: "0px", left: "0px"};
  const pos2 = {top: "0px", left: "200px"};
  const pos3 = {top: "0px", left: "400px"};
  const pos4 = {top: "200px", left: "0px"};
  const pos5 = {top: "200px", left: "200px"};
  const pos6 = {top: "200px", left: "400px"};
  const pos7 = {top: "400px", left: "0px"};
  const pos8 = {top: "400px", left: "200px"};
  const pos9 = {top: "400px", left: "400px"};

  const array = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
  const incArray = [];

  for (let index = 0; index < 9; index++) {
    const randNum = Math.floor(Math.random() * (9-index));
    const decArray = array.splice(randNum, 1);
    incArray.push(decArray);
  }

  const pos1Shuffled = incArray[0][0];
  const pos2Shuffled = incArray[1][0];
  const pos3Shuffled = incArray[2][0];
  const pos4Shuffled = incArray[3][0];
  const pos5Shuffled = incArray[4][0];
  const pos6Shuffled = incArray[5][0];
  const pos7Shuffled = incArray[6][0];
  const pos8Shuffled = incArray[7][0];
  //const pos9Shuffled = incArray[8][0];

function App() {

  const move = (x, y) => {
    if (x === pos1) {
      if (one !== pos2 && two !== pos2 && three !== pos2 && four !== pos2 && five !== pos2 && six !== pos2 && seven !== pos2 && eight !== pos2) {y(pos2)}
      else if (one !== pos4 && two !== pos4 && three !== pos4 && four !== pos4 && five !== pos4 && six !== pos4 && seven !== pos4 && eight !== pos4) {y(pos4)}
    }
    else if (x === pos2) {
      if (one !== pos1 && two !== pos1 && three !== pos1 && four !== pos1 && five !== pos1 && six !== pos1 && seven !== pos1 && eight !== pos1) {y(pos1)}
      else if (one !== pos3 && two !== pos3 && three !== pos3 && four !== pos3 && five !== pos3 && six !== pos3 && seven !== pos3 && eight !== pos3) {y(pos3)}
      else if (one !== pos5 && two !== pos5 && three !== pos5 && four !== pos5 && five !== pos5 && six !== pos5 && seven !== pos5 && eight !== pos5) {y(pos5)}
    }
    else if (x === pos3) {
      if (one !== pos2 && two !== pos2 && three !== pos2 && four !== pos2 && five !== pos2 && six !== pos2 && seven !== pos2 && eight !== pos2) {y(pos2)}
      else if (one !== pos6 && two !== pos6 && three !== pos6 && four !== pos6 && five !== pos6 && six !== pos6 && seven !== pos6 && eight !== pos6) {y(pos6)}
    }
    else if (x === pos4) {
      if (one !== pos1 && two !== pos1 && three !== pos1 && four !== pos1 && five !== pos1 && six !== pos1 && seven !== pos1 && eight !== pos1) {y(pos1)}
      else if (one !== pos5 && two !== pos5 && three !== pos5 && four !== pos5 && five !== pos5 && six !== pos5 && seven !== pos5 && eight !== pos5) {y(pos5)}
      else if (one !== pos7 && two !== pos7 && three !== pos7 && four !== pos7 && five !== pos7 && six !== pos7 && seven !== pos7 && eight !== pos7) {y(pos7)}
    }
    else if (x === pos5) {
      if (one !== pos2 && two !== pos2 && three !== pos2 && four !== pos2 && five !== pos2 && six !== pos2 && seven !== pos2 && eight !== pos2) {y(pos2)}
      else if (one !== pos6 && two !== pos6 && three !== pos6 && four !== pos6 && five !== pos6 && six !== pos6 && seven !== pos6 && eight !== pos6) {y(pos6)}
      else if (one !== pos8 && two !== pos8 && three !== pos8 && four !== pos8 && five !== pos8 && six !== pos8 && seven !== pos8 && eight !== pos8) {y(pos8)}
      else if (one !== pos4 && two !== pos4 && three !== pos4 && four !== pos4 && five !== pos4 && six !== pos4 && seven !== pos4 && eight !== pos4) {y(pos4)}
    }
    else if (x === pos6) {
      if (one !== pos3 && two !== pos3 && three !== pos3 && four !== pos3 && five !== pos3 && six !== pos3 && seven !== pos3 && eight !== pos3) {y(pos3)}
      else if (one !== pos5 && two !== pos5 && three !== pos5 && four !== pos5 && five !== pos5 && six !== pos5 && seven !== pos5 && eight !== pos5) {y(pos5)}
      else if (one !== pos9 && two !== pos9 && three !== pos9 && four !== pos9 && five !== pos9 && six !== pos9 && seven !== pos9 && eight !== pos9) {y(pos9)}
    }
    else if (x === pos7) {
      if (one !== pos4 && two !== pos4 && three !== pos4 && four !== pos4 && five !== pos4 && six !== pos4 && seven !== pos4 && eight !== pos4) {y(pos4)}
      else if (one !== pos8 && two !== pos8 && three !== pos8 && four !== pos8 && five !== pos8 && six !== pos8 && seven !== pos8 && eight !== pos8) {y(pos8)}
    }
    else if (x === pos8) {
      if (one !== pos7 && two !== pos7 && three !== pos7 && four !== pos7 && five !== pos7 && six !== pos7 && seven !== pos7 && eight !== pos7) {y(pos7)}
      else if (one !== pos5 && two !== pos5 && three !== pos5 && four !== pos5 && five !== pos5 && six !== pos5 && seven !== pos5 && eight !== pos5) {y(pos5)}
      else if (one !== pos9 && two !== pos9 && three !== pos9 && four !== pos9 && five !== pos9 && six !== pos9 && seven !== pos9 && eight !== pos9) {y(pos9)}
    }
    else if (x === pos9) {
      if (one !== pos6 && two !== pos6 && three !== pos6 && four !== pos6 && five !== pos6 && six !== pos6 && seven !== pos6 && eight !== pos6) {y(pos6)}
      else if (one !== pos8 && two !== pos8 && three !== pos8 && four !== pos8 && five !== pos8 && six !== pos8 && seven !== pos8 && eight !== pos8) {y(pos8);}
    }
  }

  const [ one, setOne ] = useState(pos1Shuffled); const clickOne = () => {move(one, setOne);}
  const [ two, setTwo ] = useState(pos2Shuffled); const clickTwo = () => {move(two, setTwo);}
  const [ three, setThree ] = useState(pos3Shuffled); const clickThree = () => {move(three, setThree);}
  const [ four, setFour ] = useState(pos4Shuffled); const clickFour = () => {move(four, setFour);}
  const [ five, setFive ] = useState(pos5Shuffled); const clickFive = () => {move(five, setFive);}
  const [ six, setSix ] = useState(pos6Shuffled); const clickSix = () => {move(six, setSix);}
  const [ seven, setSeven ] = useState(pos7Shuffled); const clickSeven = () => {move(seven, setSeven);}
  const [ eight, setEight ] = useState(pos8Shuffled); const clickEight = () => {move(eight, setEight);}
  
  return (
    <div className="App">
      <div className="box one" onClick={clickOne} style={one}></div>
      <div className="box two" onClick={clickTwo} style={two}></div>
      <div className="box three" onClick={clickThree} style={three}></div>
      <div className="box four" onClick={clickFour} style={four}></div>
      <div className="box five" onClick={clickFive} style={five}></div>
      <div className="box six" onClick={clickSix} style={six}></div>
      <div className="box seven" onClick={clickSeven} style={seven}></div>
      <div className="box eight" onClick={clickEight} style={eight}></div>
    </div>
  );
}

export default App;
