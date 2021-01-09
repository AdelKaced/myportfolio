import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import './navbar.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

 const showMenu = () => {
      setShowNav(!showNav)
  }
  return (
    <div className="navbar">
      <div onClick={showMenu} className="burger-menu">{showNav ? <ImCross /> : <FaBars />}</div>
      <div className={showNav ?  " menu  ":  "menu  hidden-menu" }  >
        <ul>
          <li>Presentation </li>
          <li>realisation </li>
          <Link to='#interets'>
          <li>Centre d'interest </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
