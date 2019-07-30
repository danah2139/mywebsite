import React from 'react';
import './App.css';
import Rotation from 'react-rotation'
import logo from './assets/img/dana.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className = 'fixed_img' src ={logo}/>
        <p>
          Dana Cohen
        </p>
      </header>
    </div>
  );
}

export default App;
