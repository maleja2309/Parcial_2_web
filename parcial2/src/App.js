import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Productos from "./components/productos";
import Details from "./components/details";
import Header from "./components/header";
import Auth from "./components/autenticacion";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/cafes" element={<Productos />} />
          <Route path="/cafes/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
