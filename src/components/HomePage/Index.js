import React from "react";
import { Carousel } from "react-bootstrap";
import "./scss/index.scss";
import "./scss/landingpage.scss"
export const Index = () => {


  const welcome = (
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
  )
  return (
    <div className="div-parent row">
      <div className="bg-image">
        <Carousel
        variant='dark'
        className ="
        d-flex
        bg-light
        row mx-5 mt-5 rounded col- h-50 landing-page-carrousel"  
        >
          <Carousel.Item
            className="container row col-6 w-75 bg-black mx-0"

          >
            <h3>Third slidAAAAAAAAAAAAAAAAAAAAAAAAAAAe label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Item>

          <Carousel.Item
            className="container row col-6 w-75 bg-black mx-0"
          >
            <div
            >sssss
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item
            className="container row col-6 w-75 bg-black mx-0"
          >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Item>
        </Carousel>

      </div>

    </div>
  );
};
