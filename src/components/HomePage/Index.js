import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./scss/index.scss";
import "./scss/landingpage.scss";
export const Index = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const welcome = (
    <div className="div-landing-page-card">
      <h1 className="display-1 fw-bold">Te damos la bienvenida</h1>
      <p className="fst-italic">El trabajo en equipo puede ser difiicil, desordendo, complicado...pero
        sigue siendo la mejor forma de trabajar. Por eso creamos Nuestros
        software un lugar donde las personas trabajan juntas
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
  );
  const className = "container row col align-self-center";
  return (  
    <div className="div-parent">
      <div className="bg-image d-flex justify-content-center">
      <Carousel activeIndex={index} onSelect={handleSelect}
        slide={false}
        pause= {'hover'}
          variant="dark"  
          className="bg-light shadow container p-4 col-6 align-self-center rounded mt-4 landing-page-carrousel"
        >
          <Carousel.Item 
          interval={100000}
          className={className}>{welcome}</Carousel.Item>

          <Carousel.Item className={className}>
            <h3>second slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Item>
          <Carousel.Item className={className}>
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
