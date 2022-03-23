import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}> </Route>
        <Route exact path='/signup' element={<Signup />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
