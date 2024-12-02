'use client'
import Homes from "./componentes/home"
import Menu from "./componentes/header"
import Footer from "./componentes/footer"
import React, { useState, useEffect } from 'react';
import Carrucel from "./componentes/carrucel"
import Banner from "./componentes/banner"
import "./style/home.css"
import Video from "./componentes/videoP"
import HeaderCategori from "./componentes/headerCategori"
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
      <div className="header">
        <Menu />
      </div>
     

      <Homes />

    

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
