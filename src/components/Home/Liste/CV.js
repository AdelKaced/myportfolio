import React from 'react';

function CV({ info }) {
  console.log(info);
  if (info !== 'CV') {
    return null;
  }
  return (
    <div className="cv">
      <p>
        Après 8 années dans le domaine de la logistique, j'ai décidé d'entamer
        un tournant dans ma carrière. Curieux des nouvelles technologies et
        attiré par l'aspect technique et créatif, je me suis naturellement
        dirigé vers le métier de développeur web. Au cours de ma formation à la
        Wild Code School, je me suis familiarisé avec les langages
        indispensables (HTML , CSS, JAVASCRIPT ) et me suis également spécialisé
        en ReactJS sur la partie front et en Express JS pour le back.
      </p>
    </div>
  );
}

export default CV;
