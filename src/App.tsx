import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './modules/layout/Header';
import { Directory_Paths } from './DirPaths';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <Directory_Paths />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
