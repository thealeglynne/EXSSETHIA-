"use client";  // Marca este componente como Client Component

import React from 'react';
import '../[id]/loginpopUpT.css';  // Asegúrate de tener un archivo CSS separado para los estilos del popup

export default function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <h2 className='title2'>Visitanos</h2>
        <button className="login-button">Linkedin</button>
        <button className="login-button">Instagram</button>
        <button className="login-button">Facebook</button>
        <button className="close-popup" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
