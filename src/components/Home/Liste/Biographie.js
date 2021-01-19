import React from 'react';

function Biographie({ info }) {
  console.log(info);
  if (info !== 'Biographie') {
    return null;
  } else
    return (
      <div className="biographie">
        <p>
          Après 8 années dans le domaine de la logistique, j'ai décidé d'entamer
          un tournant dans ma carrière.<br/>
          Curieux des nouvelles technologies et
          attiré par l'aspect technique et créatif, je me suis naturellement
          dirigé vers le métier de développeur web.<br/> Au cours de ma formation à
          la Wild Code School, je me suis familiarisé avec les langages
          indispensables (HTML , CSS, JAVASCRIPT ) <br/> et me suis également
          spécialisé en ReactJS sur la partie front et en Express JS pour le
          back.  
        </p>
      </div>
    );
}

export default Biographie;
