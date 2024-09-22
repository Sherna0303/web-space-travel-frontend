import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import Icon from "../../elements/Icon/inde";

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className="logo">
              <Icon size={30} color={"#ffff"} icon={"rocket-takeoff-fill"} />
              MoonT</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/catalog" className="nav-link">
                  Catálogo de Viajes
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contact" className="nav-link">
                  Contacto
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
