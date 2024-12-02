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
                                src="https://i.pinimg.com/474x/46/71/4b/46714b71b30d8e55ce811b6ab8d033a7.jpg"
                                alt="Person with a game controller in hand"
                            />
                            <figcaption className="figcaption">¿quienes somos? </figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card2">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/736x/90/7a/0b/907a0bf58f18c9ec1b86179ae6ea34c9.jpg"
                                 alt="Person with curly hair in neon lighting"
                            />
                            <figcaption className="figcaption">Atencion al cliente</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card3">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/736x/eb/0c/7c/eb0c7cc0f78abc390b86c3dc48dc4345.jpg"
                                alt="Person in vibrant neon lighting with abstract shapes"
                            />
                            <figcaption className="figcaption">Servicios</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card4">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/474x/04/8c/92/048c92015ce7bc3f094181066728dcae.jpg"
                                alt="Person wearing a virtual reality headset in a blue-lit room"
                            />
                            <figcaption className="figcaption">Blog Lumina</figcaption>
                        </figure>
                    </a>
                </div>
                <h2 className='Text'>Calidad que se nota, estilo que impresiona. Así es Exssethia.</h2>
            
            </section>
        </>
    );
};

export default Cards;
