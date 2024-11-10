"use client";  // Marca este componente como un Client Component

import React, { useState } from 'react';
import '../style/header.css';  // Asegúrate de usar un archivo CSS regular
import LoginPopup from "../componentes/loginPopUp"
import SearchBar from "../componentes/SearchBar"
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para el popup de login

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://i.pinimg.com/564x/60/fe/1f/60fe1fea1ce51ea908460990f0cda709.jpg" alt="Logo" className="logo" />
        <h1 className="title2">Exssethia</h1>
       
      </div>
       <div className="inputSearsh">
    <SearchBar />
    </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
        <li><a href="#nosotros" className="nav-item">Todo</a></li>
          <li><a href="#nosotros" className="nav-item">Cuidado capilar</a></li>
          <li><a href="#contactanos" className="nav-item">Maqillaje</a></li>
          <li><a href="#iniciar-sesion" className="nav-item">Cidado facial</a></li>
          <li><a href="#iniciar-sesion" className="nav-item">Perfumeria</a></li>
          <button className="register-button" onClick={toggleLoginPopup}>Contactanos</button>
      {/* Renderizamos el popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={toggleLoginPopup} />
    
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </div>
      
    </header>
  );
}

