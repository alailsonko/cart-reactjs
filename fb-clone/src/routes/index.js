import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Header from '../components/Header';

function Routes() {
  return (
      <Switch>
          <Header />
          <Route path="/login" exact component={Login} />
          <Route path="/" component={Home} />
          <Route path="/profile" component={Profile} />
      </Switch>
  );
}

export default Routes;