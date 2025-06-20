import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import logo from './logo.svg';

const App = () => (
  <div className="container">
    <img src={logo} alt="Vic Swap Protocol" className="logo" />
    <h1>Vic Swap Protocol</h1>
    <p>Swap, Tokenize, and Manage your assets</p>
    <button>Connect Wallet</button>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
