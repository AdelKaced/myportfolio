import React, { Component } from 'react';
import Biographie from './Biographie';
import CV from './CV';
import Blog from './Blog';

import './Navbar.css'

let list = ['Biographie', 'CV', 'Blog'];

class Liste extends Component {
  state = {
    Biographie: true,
    CV: false,
    Blog: false,
  };

  show = (e) => {
    list.map(item=> this.setState ({ [item]: false}))   
    this.setState({ [e.target.id]: true });
  };

  render() {
    console.log((this.state))
        
    return (
      <div className="navbar">
        <ul className="list">
          {list.map((item) => (
            <li
              onClick={this.show}
              id={item}
              // className={this.state ? 'active' : ''}
            >
              {' '}
              {item}
            </li>
          ))}
        </ul>
        <Biographie info={this.state.Biographie} />
        <CV info={this.state.CV} />
        <Blog info={this.state.Blog} />
      </div>
    );
  }
}

export default Liste;
