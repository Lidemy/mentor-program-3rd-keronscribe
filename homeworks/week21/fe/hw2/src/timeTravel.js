/* eslint-disable */
import React from 'react';

function Btn({ id, handleTimeTravel }) {
  const backClick = (e) => {
    const num = e.target.classList[0];
    handleTimeTravel(num);
  };

  return (
    <button className={id} onClick={backClick}>
Back to Step
      {' '}
      {id}
    </button>
  );
}
export default Btn;
