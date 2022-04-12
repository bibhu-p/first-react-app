import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Swap from './swap';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Swap name='Jay'/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
