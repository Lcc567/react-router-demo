
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import { HashRouter, Route, Link } from './react-router-dom'

ReactDOM.render(
  <HashRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path='/user' component={User} />
      <Route path="/profile" component={Profile} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
