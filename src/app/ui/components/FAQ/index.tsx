import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import "./style.css";

const FAQ: React.FC = () => {
  return (
    <Container className="row col-9 faq-container mt-5">
      <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Cuánto dura el viaje a la Luna?</Accordion.Header>
          <Accordion.Body>
            El viaje total, desde el despegue hasta el regreso, tiene una duración de aproximadamente 7 días, con 3 de ellos en la superficie lunar.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Es seguro viajar a la Luna?</Accordion.Header>
          <Accordion.Body>
            Totalmente. Nuestros viajes están respaldados por la última tecnología aeroespacial y cuentan con los más altos estándares de seguridad. Además, nuestros tripulantes reciben entrenamiento especializado antes del despegue.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Qué incluye el paquete de viaje?</Accordion.Header>
          <Accordion.Body>
            El paquete incluye el transporte de ida y vuelta a la Luna, alojamiento en nuestro campamento lunar, todas las comidas, y un equipo de exploración para tus aventuras en la superficie lunar.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Cuál es el costo del viaje?</Accordion.Header>
          <Accordion.Body>
            Los precios varían dependiendo del tipo de experiencia que elijas. Tenemos opciones estándar y de lujo. Te invitamos a consultar nuestra sección de precios para más detalles.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Necesito preparación física?</Accordion.Header>
          <Accordion.Body>
            Se recomienda un nivel básico de acondicionamiento físico. Antes del viaje, recibirás una capacitación especial para adaptarte a la gravedad lunar y a las condiciones del espacio.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
