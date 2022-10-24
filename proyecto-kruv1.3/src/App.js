import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio.jsx';
import Perfiles from './pages/Perfiles.jsx';
import Ingresoempleados from './pages/Ingresoempleados.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Perfiles" element={<Perfiles />} />
          <Route path="/Ingresoempleados" element={<Ingresoempleados />} />
        </Routes>
      </Sidebar>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;