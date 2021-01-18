import React, { Component } from 'react';
import Biographie from './Biographie';
import CV from './CV';
// import Blog from './Blog';

import './Liste.css';

let list = ['Biographie', 'CV'];

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
        {/* <Blog info={this.state.active} />  */}
          
      </div>
    );
  }
}

export default Liste;
