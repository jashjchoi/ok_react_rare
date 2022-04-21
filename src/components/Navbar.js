import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './assets/css/Navbar.css';
import logo from "./assets/images/oklogo.png"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src={logo} alt="logo" /> 
        </Link>
        <h3>Oklahoma <span className="cursive">Rare</span> </h3>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links'
              onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to='/login' className='nav-links-mobile'
              onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
        {/* <div className="login">
         <Button />
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;