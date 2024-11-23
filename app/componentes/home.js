'use client'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '../style/home.css'
import Cards from "../componentes/cards"
import Carrucel from "../componentes/carrucel"
import CardProduct from "../componentes/CardProduct"
import VideoP from "../componentes/videoP"
import SearchBar from "../componentes/SearchBar"
import Banner from "../componentes/banner"



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
   
 
     
    <div className='container'>
      
      <Banner />
    <div className='main'>
    
    <div className="main1A">
      
     <div className="content">
    <div className="text-section">
   
      <h1 className="title">Lumina</h1>
      <p className="description">
      La belleza que ilumina tu esencia, el cuidado que tu piel merece.  </p>
    </div>


    <div className="image-section">
      <img src="https://i.pinimg.com/originals/3b/f3/7d/3bf37d79a9fa9e7b3cff9c0551314989.gif" alt="Ecommerce" />
    </div>
  </div>
    </div>
    
    
    <div className="main2">
    <Cards />
    </div>
   
 
    <div className="main2G">
        
        </div>
   
   
    <div className="main3">
    <CardProduct />
    </div>
   
    <div className="main1">
    <Carrucel />
    </div>
   
   
    </div>
    </div>

  )
}