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
  const ourPeople = (
    
  <section id="services" class="services section-padding">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header text-center pb-5">
          <h2>Nuestros servicios</h2>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-12 col-lg-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-inboxes-fill"></i>
            <h3 class="card-title">Buscador de archivos</h3>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iusto porro ducimus
              earum, sequi nam et. Optio necessitatibus nisi pariatur debitis fugit, sint amet. Expedita officiis
              autem eius animi cumque.</p>
            <button class="btn btn-warning text-dark">Leer mas</button>-
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-cloud-download-fill"></i>
            <h3 class="card-title">Descarga de documentos</h3>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iusto porro ducimus
              earum, sequi nam et. Optio necessitatibus nisi pariatur debitis fugit, sint amet. Expedita officiis
              autem eius animi cumque.</p>
            <button class="btn btn-warning text-dark">Leer mas</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4">
        <div class="card text-white text-center bg-dark pb-2">
          <div class="card-body">
            <i class="bi bi-people-fill"></i>
            <h3 class="card-title">Diferentes roles</h3>
            <p class="lead">Lorem ipsum dolor sit amet, ducimus earum, sequi nam et. Optio necessitatibus nisi
              pariatur debitis fugit, sint amet. Expedita officiis autem eius animi cumque.</p>
            <button class="btn btn-warning text-dark">Leer mas</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
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
            
            {ourPeople}
{/*             
            <h3>second slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
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
