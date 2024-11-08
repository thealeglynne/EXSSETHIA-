// Carousel.js
import React from 'react';
import '../style/cards.css'; // Asegúrate de que la ruta sea correcta

const Cards = () => {
    return (
        <>
           

            <section className="section">
            <h2 className='Titulo'>secciones</h2>
                  
                <div className="cards">
                    <a href="#" className="card card1">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/24/44/12/24441235c6f236b3e3be58a5d75abf59.jpg"
                                alt="Person with a game controller in hand"
                            />
                            <figcaption className="figcaption">Bolsos Exssethia </figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card2">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/11/03/1d/11031d1c25cc6fd3c72485b6cafb6293.jpg"
                                 alt="Person with curly hair in neon lighting"
                            />
                            <figcaption className="figcaption">Perfumeria Exssethia</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card3">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/26/49/8e/26498e85d51e982bfe2fcaa9ab0c63e1.jpg"
                                alt="Person in vibrant neon lighting with abstract shapes"
                            />
                            <figcaption className="figcaption">Ropa Exssenthia</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card4">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/564x/bc/21/6f/bc216f545736e63e0bc843dd05e9b97e.jpg"
                                alt="Person wearing a virtual reality headset in a blue-lit room"
                            />
                            <figcaption className="figcaption">Servicios</figcaption>
                        </figure>
                    </a>
                </div>
                <h2 className='Text'>Calidad que se nota, estilo que impresiona. Así es Exssethia.</h2>
            
            </section>
        </>
    );
};

export default Cards;
