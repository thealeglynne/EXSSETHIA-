"use client";  // Marca este componente como un Client Component

import React, { useState } from 'react';
import '../style/header.css';  // Asegúrate de usar un archivo CSS regular
import LoginPopup from "../componentes/loginPopUp"

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
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#nosotros" className="nav-item">Nosotros</a></li>
          <li><a href="#contactanos" className="nav-item">Contáctanos</a></li>
          <li><a href="#iniciar-sesion" className="nav-item">Productos</a></li>
          <button className="register-button" onClick={toggleLoginPopup}>Comunidad</button>

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

