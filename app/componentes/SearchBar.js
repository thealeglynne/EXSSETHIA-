"use client"; // Marca este componente como un Client Component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../style/SearchBar.css";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.length > 2) {
        const response = await fetch("/categories.json");
        const data = await response.json();
        const allProducts = data.flatMap((category) => category.products);
        const results = allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };
    fetchSearchResults();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleProductClick = (productId) => {
    setIsFocused(false);
    router.push(`/product/${productId}`);
  };

  return (
    <div id="search-box" className="search-box expanded">
      {/* El input siempre está visible */}
      <input
        id="search-input-box"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder="Buscar producto"
        className="search-input-boxx"
      />

      {/* Mostramos los resultados solo cuando hay resultados de búsqueda y el input está enfocado */}
      {isFocused && searchResults.length > 0 && (
        <ul id="search-results-list" className="search-results-list">
          {searchResults.map((result) => (
            <li key={result.id} className="search-result-item">
              <button
                onClick={() => handleProductClick(result.id)}
                className="search-result-button"
              >
                <img
                  src={result.image}
                  alt={result.name}
                  className="search-result-image"
                />
                <div className="search-result-details">
                  <span className="search-result-name">{result.name}</span>
                  <span className="search-result-price">{result.price}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
