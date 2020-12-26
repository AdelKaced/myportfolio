import React from 'react';
import { Link } from 'react-router-dom';

import './Projet.css';

function Projet() {
  return (
    <div>
      <h3>Mes realisations </h3>
      <div className="projet">
        <div className="projet-list" id="first">
          <h4> Les jeux des doubles </h4>
          <Link to="/img">
            {' '}
            <div>
              <img src="cartedoubles.jpeg" alt="adel" className="photo" />
            </div>
          </Link>
        </div>
        <div className="projet-list" id="second">
          <h4> MarketPlace </h4>
          <img src="Marketplace.jpg" alt="adel" className="photo" />
        </div>
      </div>
    </div>
  );
}

export default Projet;
