"use client";
import React, { useEffect, useState } from "react";
import "../style/carrucel.css";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://i.imgur.com/KaiG2ec.png",
        "https://i.imgur.com/RRODY8h.png",
        "https://i.imgur.com/ni8q38J.png",
        "https://i.imgur.com/TN3cDzu.png",
        "https://i.imgur.com/aOr1tlz.png",
        "https://i.imgur.com/xNvNRbZ.pngs",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Cambia cada 6 segundos

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((url, index) => (
                    <div
                        key={index}
                        className="carousel-slide"
                        style={{ backgroundImage: `url(${url})` }}
                    ></div>
                ))}
            </div>
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
