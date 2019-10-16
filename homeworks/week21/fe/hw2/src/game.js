/* eslint-disable */

import React, { useState } from 'react';
import './style.css';
import Go from './go.js';
import Btn from './timeTravel.js';

const Grid = i => (
  <div className="grid" key={i} />
);

export default function Game() {
  const [user, setUser] = useState('black');
  const [winner, setWinner] = useState(null);
  const goes = [];
  for (let i = 0; i < (19 * 19); i += 1) {
    goes.push('op');
  }
  const [records, setRecords] = useState({ 0: goes });
  const [step, setStep] = useState(0);
  const [btns, setBtns] = useState([]);
  const [viewOnly, setViewOnly] = useState(0);
  const changeUser = () => {
    if (!winner) {
      setUser(user === 'black' ? 'white' : 'black');
    }
  };

  const endGame = () => {
    setWinner(user);
  };

  const handleBtnArr = () => {
    const size = Object.keys(records).length;
    const newBtn = [];
    for (let i = 0; i < size; i += 1) {
      newBtn.push(i);
    }
    setBtns(newBtn);
  };

  const updateRecords = (num) => {
    const newRecord = [...records[step]];
    newRecord[num] = user;
    const newHistory = { ...records };
    const index = step + 1;
    newHistory[index] = newRecord;
    setRecords(newHistory);
    const nextStep = step + 1;
    setStep(nextStep);
    handleBtnArr();
  };


  const posibleArrays = (target) => {
    const lines = [
      // 水平
      [target - 4, target - 3, target - 2, target - 1],
      [target - 3, target - 2, target - 1, target + 1],
      [target - 2, target - 1, target + 1, target + 2],
      [target - 1, target + 1, target + 2, target + 3],
      [target + 1, target + 2, target + 3, target + 4],
      // 左上右下
      [target - (20 * 4), target - (20 * 3), target - (20 * 2), target - 20],
      [target - (20 * 3), target - (20 * 2), target - 20, target + 20],
      [target - (20 * 2), target - 20, target + 20, target + (20 * 2)],
      [target - 20, target + 20, target + (20 * 2), target + (20 * 3)],
      [target + 20, target + (20 * 2), target + (20 * 3), target + (20 * 4)],
      // 垂直
      [target - (19 * 4), target - (19 * 3), target - (19 * 2), target - 19],
      [target - (19 * 3), target - (19 * 2), target - 19, target + 19],
      [target - (19 * 2), target - 19, target + 19, target + (19 * 2)],
      [target - 19, target + 19, target + (19 * 2), target + (19 * 3)],
      [target + 19, target + (19 * 2), target + (19 * 3), target + (19 * 4)],
      // 右上左下
      [target - (18 * 4), target - (18 * 3), target - (18 * 2), target - 18],
      [target - (18 * 3), target - (18 * 2), target - 18, target + 18],
      [target - (18 * 2), target - 18, target + 18, target + (18 * 2)],
      [target - 18, target + 18, target + (18 * 2), target + (18 * 3)],
      [target + 18, target + (18 * 2), target + (18 * 3), target + (18 * 4)],
    ];
    console.log(step);
    const theRecord = records[step];
    console.log('theRecord', theRecord);
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c, d] = lines[i];
      if (theRecord[a] === user && theRecord[a] === theRecord[b] && theRecord[a] === theRecord[c] && theRecord[a] === theRecord[d]) {
        endGame();
      }
    }
  };


  const handleTimeTravel = (num) => {
    setStep(num);
    setViewOnly(true);
  };

  const handleBackTo = () => {
    const size = Object.keys(records).length;
    setStep(size - 1);
    setViewOnly(false);
  };

  const board = [];
  for (let i = 0; i < (18 * 18); i += 1) {
    board.push(i);
  }
  return (
    <div className="devider">
      <div className="container">
        <div className="wrapper">
          {records[step].map((record, i) => <Go go={record} key={i} id={i} changeUser={changeUser} updateRecords={updateRecords} posibleArrays={posibleArrays} winner={winner} handleTimeTravel={handleTimeTravel} viewOnly={viewOnly} />) }
        </div>
        <div className="board">
          {board.map(box => Grid(box))}
        </div>
      </div>
      <div className="info">
        <h1>
          { !winner ? 'Next player' : 'Winner'}
        </h1>
        <h1 className="user">
          { !winner ? user : winner}
        </h1>
        <div className="timeMachine">
          {btns.map(btn => <Btn handleTimeTravel={handleTimeTravel} key={btn} id={btn} />)}
          {!winner && viewOnly ? <button className="back" onClick={handleBackTo}>Back To Game</button> : ''}
        </div>
      </div>
    </div>
  );
}
