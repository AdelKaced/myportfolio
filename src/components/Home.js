import Presentation from './Home/Presentation';
import Liste from './Home/Liste/Liste';
import Projets from './Home/Projets';
import Interests from './Home/Interest/Interests';

import '../App.css';

function Home() {
  return (
    <div className="home">
      <div className="rubriques">
        <Presentation />
        <Liste />
      </div>     
        <Projets />
        <Interests />
  
    </div>
  );
}

export default Home;
