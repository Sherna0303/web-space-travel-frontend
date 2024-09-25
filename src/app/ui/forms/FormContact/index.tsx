import { Form, Button, Col, Row } from "react-bootstrap";
import "./style.css";

export const FormContact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center mb-5">
          ¿Interesado en un viaje a la Luna? Llena el formulario y nos pondremos
          en contacto contigo para más detalles.
        </p>
        <Form className="contact-form">
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group controlId="formName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group controlId="formPhone">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu número de teléfono" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="formCountry">
                <Form.Label>País</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu país" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-4">
              <Form.Group controlId="formPlan">
                <Form.Label>Plan de viaje interesado</Form.Label>
                <Form.Control as="select">
                  <option>Seleccione un plan</option>
                  <option>Viaje express a la Luna</option>
                  <option>Estancia lunar de 7 días</option>
                  <option>Exploración lunar completa</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-4">
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" size="lg" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};