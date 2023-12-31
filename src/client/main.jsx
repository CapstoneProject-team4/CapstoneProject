import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Head from './Head';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Head/>
    </BrowserRouter>
  </React.StrictMode>
);