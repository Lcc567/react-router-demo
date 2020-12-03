
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.css'
import { HashRouter, Route, Link, Redirect, Switch } from './react-router-dom'

ReactDOM.render(
  <HashRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={{ pathname: "/user", state: { name: 'lee' } }}>User</Link></li>
        <li><Link to="/profile/1">Profile</Link></li>
        <li><Link to="/redirect">redirect</Link></li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/user' component={User} />
        <Route path="/profile" exact component={Profile} />
        {/* <Redirect to='/' /> */}
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
