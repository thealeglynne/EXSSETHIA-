'use client'
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../style/home.css';
import Cards from "../componentes/cards";
import Carrucel from "../componentes/carrucel";
import CardProduct from "../componentes/CardProduct";
import VideoP from "../componentes/videoP";
import SearchBar from "../componentes/SearchBar";
import Banner from "../componentes/banner";
import CardRopa from "../componentes/CartRopa"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Aquí puedes hacer cualquier operación asíncrona, como cargar productos
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se cargan los datos
  }

  return (
    <div className="container">
      <Banner />
      <div className="main">
        <div className="main1A">
          <div className="content">
            <div className="text-section">
            <h1  id='Title' className="Title">Marlis Lopez</h1> 
              <p id='description' className="description">
                La belleza que ilumina tu esencia, el cuidado que tu piel merece.
              </p>
            </div>

            <div className="image-section">
              
            </div>
          </div>
        </div>

        <div className="main2">
          <Cards />
        </div>

        <div className="main3">
          <CardProduct />
        </div>
        <div className="main3">
          <CardRopa />
        </div>
        <div id="mainV" className="mainV">
          <VideoP />
        </div>
      </div>
    </div>
  );
}
