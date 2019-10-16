/* eslint-disable */

import React from 'react';
// 修改轉調頁面什麼的
const Info = ({
  title, userid, id, handleToSinglePost, clickedId,
}) => {
  let auther = '';
  switch (userid) {
    case 1:
      auther = 'Ralph';
      break;
    case 2:
      auther = 'Ernie';
      break;
    case 3:
      auther = 'Felipa';
      break;
    case 4:
      auther = 'Maritza';
      break;
    case 5:
      auther = 'Garfield';
      break;
    case 6:
      auther = 'Viola';
      break;
    case 7:
      auther = 'Amiya';
      break;
    case 8:
      auther = 'Coralie';
      break;
    case 9:
      auther = 'Devon';
      break;
    default:
      auther = 'Carmelo';
      break;
  }
  const handleClick = () => {
    handleToSinglePost(id);
  };

  return (
    <div className="info">
      {clickedId ? <div className="title-single">{title}</div> : <div className="title-list" onClick={handleClick}>{title}</div>}
      <div className="author">
Wroten by
        {' '}
        {auther}
      </div>
    </div>
  );
};

export default Info;
