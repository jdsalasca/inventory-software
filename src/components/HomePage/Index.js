import React from "react";
import { Carousel } from "react-bootstrap";
import { Footer } from "./Footer.js";
import "./scss/index.scss";
export const Index = () => {
  return (
    <div className="div-parent row">
      <div className="bg-image">
          <Carousel
          className="carrousel"
          
          >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
       
        <div className="row cover-layer">
          <div className="col-6 w-100  rounded container mt-5 shadow p-3 mb-5 bg-white div-landing-page-card">
            <h1 className="display-1 fw-bold">Te damos la bienvenida</h1>
            <p className="fst-italic">
              El trabajo en equipo puede ser difiicil, desordendo,
              complicado...pero sigue siendo la mejor forma de trabajar. Por eso
              creamos Nuestros software un lugar donde las personas trabajan
              juntas
            </p>
            <div className="div-landing-page-buttons-options mx-5 px-3">
              <button type="button w-25 rounded" className="btn btn-success">
                Prueba la aplicacíon
              </button>
              <button type="button w-25" className="btn btn-light">
                Te contactamos
              </button>
            </div>
          </div>
        </div>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    </div>
      
    </div>
  );
};
