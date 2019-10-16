/* eslint-disable */

import React from 'react';

const Pic = ({
  imgURL, id, alt, handleToSinglePost, width, hight, clickedId,
}) => {
  const handleClick = () => {
    handleToSinglePost(id);
  };
  return (
    <div>
      {clickedId ? <img src={`${imgURL}${id}/${width}/${hight}`} className="pic-single" alt={alt} />
        : <img src={`${imgURL}${id}/${width}/${hight}`} className="pic-list" alt={alt} onClick={handleClick} />}
    </div>
  );
};

export default Pic;
