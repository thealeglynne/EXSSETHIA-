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
                                src="https://i.pinimg.com/474x/a4/31/2a/a4312a54a939b2bb908e2d9975e1712c.jpg"
                                alt="Person with a game controller in hand"
                            />
                            <figcaption className="figcaption">¿quienes somos? </figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card2">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/474x/3c/dd/49/3cdd498bbfbf54cdccb4114b88f11b5e.jpg"
                                 alt="Person with curly hair in neon lighting"
                            />
                            <figcaption className="figcaption">Atencion al cliente</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card3">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/736x/ad/6e/05/ad6e052f967f5e2ca0a72a9314cc049e.jpg"
                                alt="Person in vibrant neon lighting with abstract shapes"
                            />
                            <figcaption className="figcaption">Servicios</figcaption>
                        </figure>
                    </a>
                    <a href="#" className="card card4">
                        <figure className="visual">
                            <img
                                className="cardImg"
                                src="https://i.pinimg.com/736x/2e/73/29/2e73292a110a03e36e699ec559f2bc59.jpg"
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
