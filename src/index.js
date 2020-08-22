import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      {/* a way to render more than one component in one route
      <Route exact path="/" render={props =>
        <div>
          <Home />
          < About />
        </div>
      } /> */}
      {/* or here's a way to just use render, which is what a 'component' is doing:
      <Route path="/" render={() => <h1>Home!</h1>} /> */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
