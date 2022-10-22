import React from "react";
export const Footer = (props) => {
    return (
        <footer class="row position-absolute  w-100 mx-0 app-footer ">
        <div class="container bg-light text-dark mx-0 h-25">
          <div class="row text-center bg-light">
            <div class="col-xl-6 font-weight-light">
              <p>Legal</p>
              <p>Política de privacidad</p>
              <p>Cookies</p>
              <p>Sobre los anuncios</p>
            </div>
            <div class="col-xl-6 font-weight-light">
              <p>Colombia</p>
              <p>Contáctanos</p>
              <p>Copy 2022</p>
              <a class="" href="">
                <i class="fa-brands fa-instagram icon"> </i>
              </a>
              <a class="" href="">
                <i class="fa-brands fa-facebook icon"></i>
              </a>
              <a class="" href="">
                <i class="fa-brands fa-whatsapp icon"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}