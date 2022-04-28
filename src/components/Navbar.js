import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import logo from './assets/images/oklogo.png'
import { auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

function Navbarcontainer() {
  const [user] = useAuthState(auth);
  const history = useHistory()

  const handleLogoutClick = () => {
      auth.signOut();
      history.push('/')
  }

  const authButton = () => {
      if (user === null) {
          return (
          <Button className="loginbtn" variant="secondary" as={Link} to="/">Login</Button>
          ) 
      } else {
          return <Button className="logoutbtn" variant="secondary" onClick={handleLogoutClick}>Logout</Button>
      }
  }

  return (
    <>
    <Navbar className="navbar-custom" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"> 
          <img className="logo" src= {logo} width= "50" height="50" alt=""/> 
          <span className="navbarbrand">Oklahoma</span> <span className="cursive">Rare</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto py-3 ml-md-3">
                <Nav.Link className="font-weight-light mt-1" href="/"> Dashboard </Nav.Link>

                <Nav.Link className="font-weight-light mt-1" href="/about"> About </Nav.Link>
                <Nav.Link className="font-weight-light mt-1" href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="signbtn ml-sm-2"> {authButton()} </div>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbarcontainer;
