/* eslint-disable */

import React from 'react';

function Go({
  go, changeUser, updateRecords, posibleArrays, winner, id, viewOnly,
}) {
  const handleClick = (e) => {
    if (!viewOnly) {
      if (!winner) {
        if (e.target.classList[1] === 'op') {
          const target = e.target.classList[2];
          const num = parseInt(target);
          updateRecords(num);
          posibleArrays(num);
          changeUser();
        }
      }
    }
  };
  return (
    <div className={`go ${go} ${id}`} onClick={handleClick} />
  );
}

export default Go;
