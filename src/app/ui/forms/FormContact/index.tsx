import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "./style.css";
import { RequestModel } from "../../../core/models/requests.model";
import { SaveRequestService } from "../../../core/services/saveRequest.service";
import { GetRequestsService } from "../../../core/services/getRequests.service";
import countries from "world-countries";

export const FormContact = () => {
  const [formData, setFormData] = useState<RequestModel>({
    id: 0,
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    plan: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const countryNames = countries.map((country) => country.name.common).sort();

  const validate = () => {
    const newErrors: any = {};

    if (!/^[a-zA-Z\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "El nombre solo debe contener letras.";
    }
    if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "El teléfono solo debe contener números.";
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (formData.pais === "") {
      newErrors.pais = "Por favor, selecciona un país.";
    }
    if (formData.plan === "") {
      newErrors.plan = "Por favor, selecciona un plan.";
    }
    if (Object.values(formData).some((value) => value === "")) {
      newErrors.general = "Por favor, completa todos los campos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Limpia el error al corregir el campo
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let numID = GetRequestsService().length + 1;
    if (GetRequestsService().find((request) => request.id === numID)) {
      numID++;
    }
    formData.id = numID;

    const saveSuccessful = SaveRequestService(formData);
    console.log(saveSuccessful);

    if (saveSuccessful) {
      setSuccessMessage("¡Formulario enviado exitosamente!");
      setFormData({
        id: 0,
        nombre: "",
        email: "",
        telefono: "",
        pais: "",
        plan: "",
        mensaje: "",
      });

      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
    } else {
      setErrors({ general: "¡Error al enviar formulario!" });
    }
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
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors.telefono}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.telefono}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="pais">
                <Form.Label>País</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.pais}
                  onChange={handleChange}
                  isInvalid={!!errors.pais}
                >
                  <option value="">Seleccione un país</option>
                  {countryNames.map((pais) => (
                    <option key={pais} value={pais}>
                      {pais}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.pais}
                </Form.Control.Feedback>
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
                  isInvalid={!!errors.plan}
                >
                  <option value="">Seleccione un plan</option>
                  <option>Conociendo a la Luna</option>
                  <option>Vuelta a la Luna</option>
                  <option>Super Espacial</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.plan}
                </Form.Control.Feedback>
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
          {errors.general && (
            <p className="text-danger text-center">{errors.general}</p>
          )}
          {successMessage && (
            <p className="text-success text-center">{successMessage}</p>
          )}
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
