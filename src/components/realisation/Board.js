import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';
import './card.css'

export default function Board({ cards, flipped, handleClick }) {
  return (
    <div>
      {cards.map((card) => (
        <Cards
        key={card.id}
          id={card.id}
          type={card.type}
          width={card.width}
          height={card.height}
          back={card.back}
          front={card.front}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}


Card.propTypes = {
    cards : PropTypes.arrayOf(Proptypes.shape({})),
    flipped : PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick : PropTypes.func.isRequired
    

}