import React from 'react';

function Biographie({info}) {
  console.log(info)
  if (info !== 'Biographie') {
    return null;
  }
  else
  return <div className='biographie'> 
      <p>
        Biographie
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      </p>

  </div>;
}

export default Biographie;
