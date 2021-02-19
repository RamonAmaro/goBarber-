import React from 'react';
import { SignIn } from './pages';
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  return (
    <div>
      <SignIn />
      <GlobalStyle />
    </div>
  );
};
