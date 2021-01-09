import React from 'react';
import { Link } from 'react-router-dom';

import './Projet.css';

function Projet(props) {
  console.log(props)
  return (
    <div className='projets'>
      <h3>Mes realisations </h3>
            <Link to="/memory">
      <div className="projet">
        <div className="projet-list" id="first">
          
          <h4> Les jeux des doubles </h4>
            {' '}
            <div>
              <img src="cartedoubles.jpeg" alt="adel" className="photo" />
            </div>
        </div>
        <div className="projet-list" id="second">
          <h4> MarketPlace </h4>
          <img src="Marketplace.jpg" alt="adel" className="photo" />
        </div>
      </div>
          </Link>
    </div>
  );
}

export default Projet;
