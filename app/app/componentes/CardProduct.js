"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Hook para navegación
import "../style/CardProduct.css";

const CardsR = () => {
  const [categories, setCategories] = useState([]); // Categorías con productos
  const [visibleCount, setVisibleCount] = useState(4); // Número de productos visibles
  const [selectedCategory, setSelectedCategory] = useState("all"); // Categoría seleccionada
  const router = useRouter(); // Inicializar el router

  useEffect(() => {
    // Fetch de las categorías
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Obtener productos según la categoría seleccionada
  const getFilteredProducts = () => {
    if (selectedCategory === "all") {
      return categories.flatMap((category) => category.products);
    }
    const category = categories.find((cat) => cat.name === selectedCategory);
    return category ? category.products : [];
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Mostrar más productos
  };

  const handleViewMore = (productId) => {
    router.push(`/product/${productId}`); // Navegar al producto específico
  };

  // Productos filtrados
  const filteredProducts = getFilteredProducts();

  return (
    <div>
      {/* Título y descripción */}
      <div className="header-section">
        <h1>Nuestrtos Productos</h1>
        <p>Explora una amplia gama de productos diseñados para resaltar tu belleza y cuidado personal.</p>
      </div>

      {/* Botones de categorías */}
      <div className="sort-controls">
        <button onClick={() => setSelectedCategory("all")}>Todos</button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="cardsR">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="cardR">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="infoCard">
              <h3>{product.name}</h3>
              <p>
                {product.description}, {product.price}
              </p>
              <button className="add-to-cart-btn">Carrito</button>
              <button
                className="view-more-btn"
                onClick={() => handleViewMore(product.id)}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Ver más" */}
      {visibleCount < filteredProducts.length && (
        <button
          id="view-more-btnG"
          className="view-more-btn"
          onClick={handleShowMore}
        >
          Ver más
        </button>
      )}
    </div>
  );
};

export default CardsR;
