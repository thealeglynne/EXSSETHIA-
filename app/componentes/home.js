'use client'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import styles from '../style/home.css'
import Cards from "../componentes/cards"
import Carrucel from "../componentes/carrucel"
import CardProduct from "../componentes/CardProduct"
import VideoP from "../componentes/videoP"
import SearchBar from "../componentes/SearchBar"
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

    <div className='main'>
    <div className="main1">
     <div className="content">
    <div className="text-section">
   
      <h1 className="title">Exsetia</h1>
      <p className="description">
      Exclusividad al alcance, diseño con identidad.  </p>
    </div>

   


    <div className="image-section">
      <img src="https://i.pinimg.com/originals/65/86/43/658643a0c319dea11fcaa3a18339be0e.gif" alt="Ecommerce" />
    </div>
  </div>
    </div>
    
    <div className="main2">
    <Cards />
    </div>
   
 
  
   

    <div className="main3">
    <CardProduct />
    </div>
    <div className="main1">
    <Carrucel />
    </div>
  
   
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    <div className="main1">
      <h1>hola mundo</h1>
    </div>
    </div>
    </div>

  )
}
