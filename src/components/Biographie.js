import React from 'react';

function Biographie({info}) {
  return <div className={info ? "biographie show": " biographie hidde" }>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      </p>

  </div>;
}

export default Biographie;
