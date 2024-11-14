'use client'; // Marca el archivo como cliente

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Cambiar a useParams

export default function Page() {
  const { id } = useParams(); // Accede al parámetro 'id' desde useParams

  if (!id) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Página de ejemplo capilar con ID: {id}</h1>
    </div>
  );
}
