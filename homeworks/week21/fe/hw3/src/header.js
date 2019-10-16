/* eslint-disable */

import React from 'react';

const Li = ({ title, handleChangeSide, chosenSide }) => {
  const handleClick = () => {
    handleChangeSide(title.toLowerCase());
  };
  console.log(title.toLowerCase() === chosenSide);

  return (<li className={`${title.toLowerCase()} ${(title.toLowerCase() === chosenSide) ? 'active' : ''}`} onClick={handleClick}>{title}</li>);
};

function Header({
  blogName, navOptions, handleChangeSide, chosenSide,
}) {
  return (
    <header>
      <h1>{blogName}</h1>
      <nav>
        <ul>
          {navOptions.map(option => <Li title={option} key={option} handleChangeSide={handleChangeSide} chosenSide={chosenSide} />)}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
