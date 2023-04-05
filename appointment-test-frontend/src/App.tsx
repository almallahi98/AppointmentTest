import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddingDoctor from './components/AddingDoctor';
import AddAppointment from './components/pages/AddAppointment';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AddingDoctor/>}/>
      <Route path='/addAppointment' element={<AddAppointment/>}/>
      <Route path='/addAppointment/:id' element={<AddAppointment/>}/>
    </Routes>
  );
}

export default App;
