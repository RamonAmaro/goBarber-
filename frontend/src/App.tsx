import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hook';
import { Routes } from './routes';
import GlobalStyle from './styles/global';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};
