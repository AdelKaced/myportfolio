import React from 'react';
import PropTypes from 'prop-types';

export default function Cards({
  id,
  back,
  front,
  flipped,
  handleClick,
  width,
  height,
}) {
  return (
    <div className={`flip-container ${flipped ? 'flipped' : ''}`}>
      style =
      {{
        width,
        height,
      }}
      onClick={() => handleClick(id)}
      <div className="flipper"></div>
      <img
      alt=''
        style={{
          width,
          height,
        }}
        className={flipped ? 'front' : 'back'}
        src={flipped ? `/img/${type}.png` : `/img/back.png`}
      />
    </div>
  );
}

Cards.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
 type : PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
