import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './modules/layout/header';
import { DirectoryPaths } from './DirPaths';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <DirectoryPaths />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
