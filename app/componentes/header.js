"use client";
import { useRouter } from 'next/navigation';  // useRouter de next/navigation
import React, { useState } from 'react';
import '../style/header.css';  
import LoginPopup from "../componentes/loginPopUp";
import SearchBar from "../componentes/SearchBar";

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

  const handleLogoClick = () => {
    console.log("Logo clicked!"); // Asegúrate de que este mensaje se imprima en la consola
    // Redirige al home cuando se hace clic en el logo o el nombre
    router.push('/');
  };


  const handleViewMore = () => {
    // Redirige a la página de todo con un id específico, por ejemplo '1'
    router.push('/todo/1');  // Puedes cambiar '1' por cualquier id dinámico
  };

  const handleViewCapilar = () => {
    // Redirige a la página dinámica de cuidado capilar con un id específico
    router.push('/capilar/1');  // Cambia '1' por el id dinámico según sea necesario
  };

  const handleViewMaquiillaje = () => {
    // Redirige a la página dinámica de cuidado capilar con un id específico
    router.push('/maquillaje/1');  // Cambia '1' por el id dinámico según sea necesario
  };

  const handleViewFacial = () => {
    // Redirige a la página dinámica de cuidado capilar con un id específico
    router.push('/facial/1');  // Cambia '1' por el id dinámico según sea necesario
  };

  const handleViewpefmeria = () => {
    // Redirige a la página dinámica de cuidado capilar con un id específico
    router.push('/perfumeria/1');  // Cambia '1' por el id dinámico según sea necesario
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={handleLogoClick}>
        <img src="https://i.pinimg.com/564x/60/fe/1f/60fe1fea1ce51ea908460990f0cda709.jpg" alt="Logo" className="logo" />
        <h1 className="title2">marlis lopez</h1>
      </div>
      <div className="inputSearsh">
        <SearchBar />
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <button className="nav-item3" onClick={handleViewMore}>Todo</button>
          {/* Redirige a un producto específico dentro de Cuidado Capilar */}
          <li><button onClick={() => router.push('/capilar/1')} className="nav-item2">Cuidado capilar</button></li>
          <li><button onClick={() => router.push('/maquillaje/1')} className="nav-item3">Maquillaje</button></li>
          <li><button onClick={() => router.push('/facial/1')} className="nav-item3">Cuidado facial</button></li>
          <li><button onClick={() => router.push('/perfumeria/1')} className="nav-item3">Perfumería</button></li>
          <button className="register-button" onClick={toggleLoginPopup}>Contáctenos</button>
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
