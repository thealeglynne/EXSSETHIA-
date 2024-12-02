'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/componentes/header';
import Footer2 from '@/app/componentes/footer';
import '../[id]/page.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (id) {
      fetch('/categories.json')
        .then((response) => response.json())
        .then((data) => {
          const allProducts = data.flatMap((category) => category.products);
          const foundProduct = allProducts.find((p) => p.id === parseInt(id));
          if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);
          }
        })
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  if (!product) {
    return <div className="loading">Cargando...</div>;
  }

  // Genera la URL de WhatsApp con los datos del producto
  const whatsappNumber = '573001234567'; // Número del asesor (sin espacios ni +)
  const whatsappMessage = `Hola, estoy interesado en el producto:
- *Nombre:* ${product.name}
- *ID:* ${product.id}
- *Precio:* ${product.price}
- *Descripción:* ${product.description}.
¿Podrías darme más información?`;

  const whatsappUrl = `https://wa.me/${3114878111}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="product-page">
      <Header />
      <div className="product-container">
        <div className="product-image">
          <img src={mainImage} alt={product.name} />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Precio: {product.price}</p>
          <div className="product-actions">
            <button
              className="btn-add-to-cart"
              onClick={() => console.log('Agregar al carrito')}
            >
              Agregar al carrito
            </button>
            {/* Botón de contacto por WhatsApp */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn-view-more">Contactar por WhatsApp</button>
            </a>
          </div>
          <div className="product-gallery">
            {product.additionalImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen adicional ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default ProductPage;
