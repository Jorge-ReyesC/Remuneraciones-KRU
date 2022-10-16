import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio.jsx';
import Perfiles from './pages/Perfiles.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Perfiles" element={<Perfiles />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;