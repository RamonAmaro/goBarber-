import React from 'react';
import { AppProvider } from './hook';
import { SignIn } from './pages';
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};
