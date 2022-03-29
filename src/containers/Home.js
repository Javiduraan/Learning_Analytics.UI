import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Tecnologico"
        />
        <Carousel.Caption>
          <h3>Tecnológico Nacional de México Campus Chihuahua II</h3>
          <p>Página principal del tecnológico.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Learning Analytics</h3>
          <p>Conoce mas sobre este nuevo método de predicciones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          <h3>Modelos y aplicación de Learning Analytics</h3>
          <p>Artículo relevante en donde se observa el desarrollo esta aplicación web para la predicción de calificaciones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />


        <Carousel.Caption>
          <h3>Sii</h3>
          <p>página principal del sistema integral de información (sii).</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  );
}