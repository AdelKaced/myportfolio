import Home from './components/Home';
import Memory from './components/realisation/Memory'

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar'
import Banner from './components/Banner';
import Interests from './components/Home/Interest/Interests';

function App() {
  return (
    <div className="App">
     <Navbar /> 
      <Banner />
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route  path='/memory'  component={Memory} /> 
        <Route exact path='/realisations/2'  component={Interests} />        
      </Switch>
    </div>
  );
}

export default App;
