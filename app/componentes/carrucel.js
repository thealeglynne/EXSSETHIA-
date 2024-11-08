"use client"
import React, { useEffect, useState } from 'react';
import '../style/carrucel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://i.pinimg.com/564x/a1/1a/14/a11a146dea1bda6f9cc3c4d74a4cc0b1.jpg',
        'https://i.pinimg.com/564x/e6/96/56/e696561a585643c2d241ba8b1b4ae72b.jpg',

        'https://i.pinimg.com/474x/84/10/fe/8410feebfdb2b615b4817df718ee811c.jpg',
        'https://i.pinimg.com/564x/38/24/0f/38240fda78ac725900754cfd8c8923f3.jpg',
        'https://i.pinimg.com/originals/25/a4/08/25a408da741318b2070a1c2177c55957.gif',
        'https://i.pinimg.com/564x/a0/37/da/a037daf7847052a3bd64f9e0b67a959a.jpg'
        
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Cambia cada 3 segundos

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
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
