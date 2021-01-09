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
  // const [reset, setReset] = useState(false);
  // console.log(reset)

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
    console.log(index);
    if (memory.length === 0 ) {
      setMemory([{image: id , position: index}]);
    }
    if (memory.length === 1 && memory[0].position !== index) {
      
        setMemory([...memory, {image: id , position: index}])
      }
    // if (memory.length >1 && memory[0].image === memory[1].image) 
    // {
    //   console.log('bravo tu as gagné')
    // }

  };

  console.log(memory);

  return (
    <div className="memory">
      <h2>Can You remember where the cards are ?</h2>
      <div className="memory-cards">
        {allCards.map((carte, index) => (
          <Card
            front={carte.picture}
            click={click}
            index={index}
            length={memory.length}
          />
        ))}
        {/* {memory.image[0] === memory.image[1] && memory.image[0] !== undefined ? (
          <p> bravo tu as gagné </p>
        ) : (
          <div className="btn-memory">
            <button>Recommencer</button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Memory;
