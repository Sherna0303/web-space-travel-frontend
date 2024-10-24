import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "./style.css";
import { RequestModel } from "../../../core/models/requests.model";
import { SaveRequestService } from "../../../core/services/saveRequest.service";

export const FormContact = () => {
  const [formData, setFormData] = useState<RequestModel>({
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    plan: "",
    mensaje: "",
  });
  const [errorSave, setErrorSave] = useState<Boolean>();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setErrorSave(SaveRequestService(formData));

    if (!errorSave) {
      alert("¡Formulario enviado exitosamente!");
    } else {
      alert("¡Error al enviar formulario!");
    }

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      pais: "",
      plan: "",
      mensaje: "",
    });
  };

  return (
    <section className="contact-section py-3">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        <p className="text-center mb-5">
          ¿Interesado en un viaje a la Luna? Llena el formulario y nos pondremos
          en contacto contigo para más detalles.
        </p>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group controlId="nombre">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group controlId="telefono">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu número de teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="pais">
                <Form.Label>País</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu país"
                  value={formData.pais}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-4">
              <Form.Group controlId="plan">
                <Form.Label>Plan de viaje interesado</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un plan</option>
                  <option>Conociendo a la Luna</option>
                  <option>Vuelta a la Luna</option>
                  <option>Super Espacial</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="mb-4">
              <Form.Group controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <button className="btn btn-primary btn-lg" type="submit">
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
};
