
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Logo from './components/Logo'
import User from './components/User'
import Login from './components/Login'
import ProtectRoute from './components/ProtectRoute'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.css'
import { HashRouter, Route, Link, Redirect, Switch } from './react-router-dom'

ReactDOM.render(
  <HashRouter>
    <div className='navbar navbar-inverse'>
      <ul className='nav navbar-nav'>
        <li><Logo /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to={{ pathname: "/user", state: { name: 'lee' } }}>User</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/redirect">redirect</Link></li>
      </ul>
    </div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path='/user' component={User} />
      <Route path='/login' component={Login} />
      <ProtectRoute path="/profile" component={Profile} />
      <Redirect to='/' />
    </Switch>
  </HashRouter>
  ,
  document.getElementById('root')
);
