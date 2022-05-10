import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <Carousel>  

      <Carousel.Item>
         <React.Fragment>      
          <div className='vid'>
            <a href="http://www.chihuahua2.tecnm.mx/" target= "_blank">
              <video loop autoPlay muted  width="100%">
              <source src="/images/Tecnologico.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
          </React.Fragment>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://acortar.link/D7lF4w" target= "_blank">
        <img
          className="d-block w-100"
          src="/images/learnignAnalytics2.png"
          alt="imagen de que es learning analytics"
        />
        </a>
        <Carousel.Caption>
          <br/>
        </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
        <a href="https://sii.chihuahua2.tecnm.mx/" target= "_blank">
          <img
          className="d-block w-100"
           src="/images/SII2.png"
          alt="Imagen del sistema integral de informacion (SII)"
          />
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}