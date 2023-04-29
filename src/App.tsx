import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './modules/layout/Header';
import { AppRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
