import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddingDoctor from './components/AddingDoctor';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AddingDoctor/>}></Route>
    </Routes>
  );
}

export default App;
