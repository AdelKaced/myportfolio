import React from 'react';
import { GrUserManager, GrHome } from 'react-icons/gr';
import { ImMobile } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

import './Projet.css';

function Presentation() {
  return (
    <div className="presentation">
      <div className="picture">
        <img src="maPhoto.jpg" alt="adel" className="maphoto" />
      </div>
      <div className="my-info">
        <div className="my-info-details">
        <div><GrUserManager /></div>
        <div className="name">Adel Kaced </div>
        </div>
        <div className="my-info-details">
        <div><GrUserManager /></div>
          <div>35 ans </div>
        </div>
        <div className="my-info-details">
        <div><GrHome /></div>
          <div>Cergy 95800</div>
        </div>
        <div className="my-info-details">
        <div><ImMobile /></div>
          <div>06 52 54 36 21</div>
        </div>
        <div className="my-info-details">
        <div><SiGmail /></div>
          <div>adel.kaced@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
