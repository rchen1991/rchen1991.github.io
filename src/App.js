import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './header/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        BODY OF THE MAIN APP
      </div>
    </div>
  );
}

export default App;
