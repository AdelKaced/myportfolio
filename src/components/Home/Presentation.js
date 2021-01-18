import React from 'react';
import { GrUserManager, GrHome } from 'react-icons/gr';
import { ImMobile } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

import './Projet.css'

function Presentation() {
  return (
    <div className="presentation">
      <div className="picture">
        <img src="maPhoto.jpg" alt="adel" className="maphoto" />
      </div>
      <div className="tableau">
        <table width="100%">
          <tr >
            <td colpan="2"  >Adel Kaced </td>
            <td ></td>
          </tr>
          <tr>
            <td>
              <GrUserManager />
            </td>
            <td>35 ans </td>
          </tr>
          <tr>
            <td>
              <GrHome />
            </td>
            <td>Cergy 95800</td>
          </tr>
          <tr>
            <td>
              <ImMobile />
            </td>
            <td>06 52 54 36 21</td>
          </tr>
          <tr>
            <td>
              <SiGmail />
            </td>
            <td>adel.kaced@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Presentation;
