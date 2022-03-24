import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from './store/FirebaseContext'
import firebase from './firebase/config'
ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
    </FirebaseContext.Provider>
  </BrowserRouter>
  , document.getElementById('root')
);


