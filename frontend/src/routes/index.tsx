import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
};
