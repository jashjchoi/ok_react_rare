import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
   </>
  );
}

export default App;
