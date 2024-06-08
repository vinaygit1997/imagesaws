import React from 'react';
import './App.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <div className="image-container">
        <div className="card">
          <img src={img1} alt="img1" />
          
        </div>
        <div className="card">
          <img src={img2} alt="img2" />
          
        </div>
      </div>
    </div>
  );
}

export default App;
