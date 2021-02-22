import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactRouterDOMProps,
} from 'react-router-dom';
import { useAuth } from '../hook/auth';

interface RouteProps extends ReactRouterDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
