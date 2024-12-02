'use client';
import { useRouter } from 'next/navigation';  // useRouter de next/navigation
import React, { useState } from 'react';
import '../[id]/headerT.css';  
import LoginPopup from "../[id]/logipopUpT";
import SearchBar from "../[id]/searchBarT";

export default function Header() {
  const router = useRouter();  // useRouter de next/navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleHomeRedirect = () => {
    router.push('/');  // Redirige al home
  };

  const handleViewMore = () => {
    router.push('/todo/1');
  };

  const handleViewCapilar = () => {
    router.push('/capilar/1');
  };

  const handleViewMaquiillaje = () => {
    router.push('/maquillaje/1');
  };

  const handleViewFacial = () => {
    router.push('/facial/1');
  };

  const handleViewpefmeria = () => {
    router.push('/perfumeria/1');
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={handleHomeRedirect} style={{ cursor: 'pointer' }}>
        <img src="https://i.pinimg.com/564x/60/fe/1f/60fe1fea1ce51ea908460990f0cda709.jpg" alt="Logo" className="logo" />
        <h1 className="title2">Exsetia</h1>
      </div>
      
      {/* Aquí va el input de búsqueda fuera del menú desplegable */}
      <div className="inputSearsh">
        <SearchBar />
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          {/* Redirige a la página "Todo" */}
          <button className="view-more-btn" onClick={handleViewMore}>Todo</button>
          {/* Redirige a las categorías específicas */}
          <li><button onClick={handleViewCapilar} className="nav-item">Cuidado capilar</button></li>
          <li><button onClick={handleViewMaquiillaje} className="nav-item">Maquillaje</button></li>
          <li><button onClick={handleViewFacial} className="nav-item">Cuidado facial</button></li>
          <li><button onClick={handleViewpefmeria} className="nav-item">Perfumería</button></li>
          
          {/* Botón para "Contáctenos" */}
          <button className="register-button" onClick={toggleLoginPopup}>Contáctenos</button>
          <LoginPopup isOpen={isLoginOpen} onClose={toggleLoginPopup} />

          {/* Botón para redirigir al Home dentro del menú desplegable */}
          <li className="home-button-item">
            <button className="home-button" onClick={handleHomeRedirect}>Ir al Home</button>
          </li>
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
