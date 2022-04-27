import React, { useState } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import './assets/css/Navbar.css';
import logo from './assets/images/oklogo.png'
import { auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


// const logout = () => {
// 	auth.signOut();
// }


function Navbarcontainer() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const [user] = useAuthState(auth);
  const history = useHistory()

  const handleLogoutClick = () => {
      auth.signOut();
      history.push('/')
  }

  const authButton = () => {
      if (user === null) {
          return (
                  <Button className="logoutbtn" as={Link} to="/">Login</Button>

          )
              
      } else {
          return <Button className="logoutbtn" onClick={handleLogoutClick}>Logout</Button>
      }
  }

  return (
    // <>
    //   <nav className='navbar'>
    //     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
    //     <img src={logo} alt="logo" /> 
    //     </Link>
    //     <h3>Oklahoma <span className="cursive">Rare</span> </h3>
    //     <div className='menu-icon' onClick={handleClick}>
    //       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    //     </div>
    //     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //       <li className='nav-item'>
    //         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
    //           Dashboard
    //         </Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link
    //           to='/about'
    //           className='nav-links'
    //           onClick={closeMobileMenu}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li className='nav-item'>
    //         <Link to='/contact-us' className='nav-links'
    //           onClick={closeMobileMenu}>
    //           Contact Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to='/login' className='nav-links-mobile'
    //           onClick={closeMobileMenu}>
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //     {/* <div className="login">
    //      <Button />
    //     </div> */}
    //   </nav>
    // </>
    <>
    <Navbar className="navbar-custom" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"> 
        <img className="logo" src= {logo} width= "50" height="50" alt=""/> 
        <span className="navbarbrand">Oklahoma</span> <span className="cursive">Rare</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto py-3">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/about"> About </Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                {/* <Nav.Link href="/login">Login</Nav.Link> */}
            </Nav>
            <div> {authButton()} </div>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbarcontainer;
