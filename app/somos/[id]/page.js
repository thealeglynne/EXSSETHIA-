'use client'; // Marca el archivo como cliente
import CardR from "../[id]/cardR";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Cambiar a useParams
import "../[id]/page.css"; // Asegúrate de importar el CSS aquí
import HeaderT from "../[id]/headerT";
import FooterT from "../[id]/footerT";

export default function Somos() {
  const { id } = useParams(); // Accede al parámetro 'id' desde useParams

  if (!id) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <HeaderT id="header-section" />
      <div className="container" id="container-section">
        <div className="main" id="main-section">
          <div className="content" id="content-section">
            <div className="text-section" id="text-section">
              <p className="description" id="description-text">Aquí va una descripción relacionada con el producto o categoría.</p>
            </div>
            <div className="image-section" id="image-section">
              <img src="https://img.freepik.com/psd-premium/skincare-branding-plantilla-historias-instagram-diseno-psd_1048816-989.jpg?semt=ais_hybrid" alt="Imagen representativa" id="image" />
            </div>
          </div>
        </div>
        <div>
          <CardR id="cardR-section" />
        </div>
      </div>
      <FooterT id="footer-section" />
    </div>
  );
}
