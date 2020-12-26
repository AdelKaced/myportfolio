import React from 'react';

function Presentation() {
  return (
    <div className="presentation">
      <h3>Qui suis je ?</h3>
      <div className="picture">
        <img src="maPhoto.jpg" alt="adel" className="maphoto" />
      </div>
      <div className="tableau">
        <table width="100%">
          <tr>
            <td>Nom </td>
            <td>Adel Kaced </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>35 ans </td>
          </tr>
          <tr>
            <td>Lieu </td>
            <td>Cergy 95800</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>06 52 54 36 21</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>adel.kaced@gmail.com</td>
          </tr>
          <td>passions</td>
          <td>Mediation , finance , sport </td>
        </table>
      </div>
    </div>
  );
}

export default Presentation;
