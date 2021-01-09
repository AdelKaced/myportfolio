import React, { useState, useEffect} from 'react';

import './Card.css';

export default function Card({ front, click, index }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    click(front,index);
  };

  // useEffect(() => {
  //   if (length > 2) setFlipped(false);
  // }, [length]);


  return (
    <div className="card">
      <img
        className="card-img"
        src={flipped ? front : 'point-d-interrogation.jpg'}
        alt={1}
        onClick={handleClick}
      />
    </div>
  );
}
