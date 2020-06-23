import React from 'react';

const NavBar = (props) => {
  const {shape} = props;
  return (
    <span>
      {shape}
      <div className={shape}></div>
    </span>
  ); 
}

export default NavBar;