import React from 'react';
import { Switch } from 'react-router-dom';
import { Dashboard, SignIn, SignUp } from '../pages';
import { Route } from './Route';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
