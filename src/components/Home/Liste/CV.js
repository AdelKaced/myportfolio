import React from 'react';
import cv from '../../../images/photoCV.png';

function CV({ info }) {
  console.log(info);
  if (info !== 'CV') {
    return null;
  }
  return (
    <div className="cv">
      <p>
        Vous pouvez consulter mon cv <br />
        <a href="https://drive.google.com/file/d/1UpZ4Ahy6s-nAXcbaP9e5IYFftT49GXWN/view?usp=sharing">
          <img src={cv} alt="photoCV" target="_blank" />
        </a>
      </p>
    </div>
  );
}

export default CV;
