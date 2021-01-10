import React, { useState, useEffect} from 'react';

import './Card.css';

export default function Card({ front, click, index, length,win }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true);
    click(front,index);
  };

  useEffect(() => {
    if (length === 2) {
     setTimeout(() => {
     setFlipped(false)
      }, 2000) ;    
    }    
  }, [length]);



console.log(win)
  return (
    <div className="card">
      <img
        className="card-img"
        src={flipped ? front : 'point-d-interrogation.jpg'}
        alt={1}
        onClick={length <=2 && handleClick}
      />
    </div>
  );
}
