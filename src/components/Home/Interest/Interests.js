import React, { useState } from 'react';
import Topic from './Topic';

import { GiTakeMyMoney, GiPopcorn } from 'react-icons/gi';
import { FcSportsMode } from 'react-icons/fc';
import { FaGlobeAsia } from 'react-icons/fa';

import './interest.css';


const themes = [
  {
    topic: 'Finance',
    logo: <GiTakeMyMoney />,
  },
  {
    topic: 'Sport',
    logo: <FcSportsMode />,
  },
  {
    topic: 'Cinema',
    logo: <GiPopcorn />,
  },
  {
    topic: 'Voyage',
    logo: <FaGlobeAsia />,
  },
];

export default function Interests() {
  const [select, setSelect] = useState('choice');

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  console.log(select)
  return (
    <div className="interests"  id="interets">
      <h3> Mes centres d'interêts</h3>
      <form className="formInterest">
        <select value={select} onChange={handleChange}>
          <option value="choice">Choisis un theme</option>
          {themes.map((item) => (
            <option value={item.topic}>{item.topic}</option>
          ))}
        </select>
      </form>

      <div className="myinterest">
        {themes
          .filter((filter) => select === 'choice' || select  === filter.topic )
          .map((item) => (
            <Topic info={item} />
          ))}
      </div>
    </div>
  );
}
