import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>You clicked {count} times</p>
      <button className="App-link" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      </header>
    </div>
  );
}

export default App;
