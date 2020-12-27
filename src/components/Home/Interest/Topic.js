import React from 'react';

import './topic.css';

const Topic= ({ info }) => {
  return (
    <div className="banniere">
      <div className="banniere-logo">{info.logo}</div>
      <div>
        <h4> {info.topic}</h4>
        <p>Toi aussi tu es passioné de {info.topic}</p>
      </div>
    </div>
  );
};

export default Topic;
