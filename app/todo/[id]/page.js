'use client'; // Marca el archivo como cliente
import CardR from "../[id]/cardR";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Cambiar a useParams
import "../[id]/page.css"; // Asegúrate de importar el CSS aquí
import HeaderT from "../[id]/headerT"
import FooterT from "../[id]/footerT"


export default function Page() {
  const { id } = useParams(); // Accede al parámetro 'id' desde useParams

  if (!id) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <HeaderT />
    <div className="container">
       
      <div className="main">
        <div className="content">
          <div className="text-section">
            
            <p className="description">Aquí va una descripción relacionada con el producto o categoría.</p>
          </div>
          <div className="image-section">
            <img src="https://img.freepik.com/psd-premium/skincare-branding-plantilla-historias-instagram-diseno-psd_1048816-989.jpg?semt=ais_hybrid" alt="Imagen representativa" />
          </div>
        </div>
      </div>
      <div>
       
        <CardR />
      </div>
    </div>
    <FooterT />
    </div>
  );
}
