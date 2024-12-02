"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../style/CardProduct.css";

const CardsR = () => {
  const [categories, setCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Mostrar inicialmente 4 productos
  const [selectedCategory, setSelectedCategory] = useState(""); // Inicialmente vacío
  const router = useRouter();

  useEffect(() => {
    // Fetch de las categorías
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        // Seleccionar la primera categoría automáticamente
        if (data.length > 0) {
          setSelectedCategory(data[0].name);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Filtrar las categorías visibles inicialmente (máximo 3 para botones)
  const filteredCategories = categories.slice(0, 3);

  const getFilteredProducts = () => {
    if (selectedCategory === "all") {
      // Mostrar productos de todas las categorías filtradas
      return filteredCategories.flatMap((category) => category.products);
    }

    // Filtrar productos según la categoría seleccionada
    const category = filteredCategories.find((cat) => cat.name === selectedCategory);
    return category ? category.products : [];
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <div className="header-section">
        <h1>Nuestros Productos de cuidado corporal</h1>
        <p>Explora nuestra gama de productos para el cuidado personal y belleza.</p>
      </div>
      <div className="sort-controls">
        {/* Botones para seleccionar las categorías */}
        {filteredCategories.map((category) => (
          <button
            key={category.name}
            className={selectedCategory === category.name ? "active" : ""}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          Todos
        </button>
      </div>

      <div className="cardsR">
        {/* Mostrar los productos filtrados */}
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="cardR">
            <img src={product.image} alt={product.name} id="product-image" className="product-image" />
            <div className="infoCard">
              <h3>{product.name}</h3>
              <p>
                {product.description}, {product.price}
              </p>
              <button
                className="view-more-btn"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón "Ver más" si hay más productos */}
      {visibleCount < filteredProducts.length && (
        <button onClick={() => setVisibleCount((prev) => prev + 8)} id="view-more-btng" className="view-more-btn">
          Ver más
        </button>
      )}
    </div>
  );
};

export default CardsR;
