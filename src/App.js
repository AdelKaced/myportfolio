import Liste from './components/Liste';
import Presentation from './components/Presentation';
import Projets from './components/Projets'
import Interests from './components/Interests'

// import {Switch , Route} from 'react-router-dom'

import Banner from './components/Banner'

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />     
      <div className="rubriques">
        <Presentation />
        <Liste />
      </div>
      <Projets />
      <Interests />
    </div>
  );
}

export default App;
