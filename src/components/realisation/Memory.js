import { useState, useEffect } from 'react';
// import Board from './Board';

import Card from './Card';

const cartes = [
  {
    picture: 'icons8-année-du-boeuf-48.png',
  },
  {
    picture: 'icons8-année-du-cheval-48.png',
  },
  {
    picture: 'icons8-année-du-chien-48.png',
  },
  {
    picture: 'icons8-année-du-cochon-48.png',
  },
  {
    picture: 'icons8-année-du-lapin-48.png',
  },
  {
    picture: 'icons8-année-du-rat-48.png',
  },
  {
    picture: 'icons8-année-du-singe-48.png',
  },
];

const _cartes = cartes;

function Memory() {
  const [allCards, setAllCards] = useState(cartes.concat(_cartes));
  const [memory, setMemory] = useState([]);
  const [win, setWin] = useState(false);
  
  useEffect(() => {
    const _array = allCards.slice(0);
    for (let i = 0; i < allCards.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = _array[i];
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp;
    }
    setAllCards(_array);
  }, []);

  const click = (id, index) => {
    if (memory.length === 0) {
      setMemory([{ image: id, position: index }]);
    }
    if (memory.length === 1 && memory[0].position !== index) {
      setMemory([...memory, { image: id, position: index }]);
    }
    if (memory.length === 2 && memory[0].image !== memory[1].image)
    {
      setMemory([]);
      setMemory([{image: id , position: index}]);

    }
  };

  useEffect(() => {
    if (memory.length === 2) {
      if (memory[0].image === memory[1].image) {
        setWin(true);
      } 
    }
  }, [memory]);

  console.log(memory)

  return (
    <div className="memory">
      <h2>Can You remember where the cards are ?</h2>
      <div className="memory-cards">
        {allCards.map((carte, index) => (
          <Card
            front={carte.picture }
            click={click}
            index={index}
            length={memory.length}
            win ={win}

          />
        ))}
        {win && (
          <div className="btn-memory">
          <p> bravo tu as gagné </p>
            <button>Recommencer</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Memory;
