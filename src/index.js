import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './home/Home'
import About from './about/About'
import Login from './login/Login'


ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);

