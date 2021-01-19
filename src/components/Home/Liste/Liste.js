import React, { Component } from 'react';
import Biographie from './Biographie';
import CV from './CV';
import Motivation from './Motivation';

import './Liste.css';

let list = ['Biographie','Motivation', 'CV'];

class Liste extends Component {
  state = {
        active: 'Biographie',
  };

  render() {
    console.log(this.state);

    return (
      <div className="liste">
        <ul className="list">
          {list.map((item) => (
            <li
              onClick={() => this.setState({ active: item })}
              id={item}
              className={this.state.active === item ? 'active' : ''}
            >
              {' '}
              {item}
            </li>
          ))}
        </ul>
          
        <Biographie info={this.state.active}/>         
        <CV info={this.state.active} />       
        <Motivation info={this.state.active} /> 
          
      </div>
    );
  }
}

export default Liste;
