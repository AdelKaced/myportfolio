import Home from './components/Home';
import Projets from './components/Home/Projets'

import { Switch, Route } from 'react-router-dom';

import Banner from './components/Banner';
import Interests from './components/Home/Interest/Interests';

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route exact path='/realisations'  component={Projets} /> 
        <Route exact path='/interest'  component={Interests} />        
      </Switch>
    </div>
  );
}

export default App;
