import React, { Fragment } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

export const ToolBar = () => {
  return (
    <Fragment>
      <Navbar className=" mx-0" bg="light" expand="lg">
        <Container className="mx-5 px-0 d-lg-flex col-12 container-nav-toolbar">
          <Navbar.Brand href="#home" className="align-self-start">
            <img 
              src="/img/icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Software de inventario
          </Navbar.Brand>
          <div className="px-0 mx-0 align-self-end ">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link href="#home">Nuestros servicios</Nav.Link>
                <Nav.Link href="#link">Te contactamos</Nav.Link>
                <Nav.Link href="#link">Conozcanos</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
        </Container>
      </Navbar>
    </Fragment>
  );
};
