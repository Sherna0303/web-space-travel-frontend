import React from "react";
import { Card, Col, Row } from "react-bootstrap";

// Interfaz para definir las reseñas
interface Review {
  name: string;
  comment: string;
  rating: number;
}

// Lista de reseñas de ejemplo
const reviews: Review[] = [
  {
    name: "Juan Pérez",
    comment:
      "¡El viaje a la Luna fue increíble! La vista es algo que nunca olvidaré.",
    rating: 5,
  },
  {
    name: "Ana Gómez",
    comment: "Una experiencia única, pero el tiempo fue corto. ¡Quiero volver!",
    rating: 4,
  },
  {
    name: "Carlos Rodríguez",
    comment: "Todo fue perfecto, la atención del equipo es de primera.",
    rating: 5,
  },
  {
    name: "María Fernández",
    comment: "El paisaje lunar es asombroso, pero el viaje fue algo agotador.",
    rating: 3,
  },
];

// Componente para mostrar las estrellas según la valoración
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-warning">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="row col-9 my-5">
      <h2 className="text-center mb-4">Reseñas de nuestros viajeros</h2>
      <Row className="justify-content-center">
        {reviews.map((review, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>"{review.comment}"</Card.Text>
                <StarRating rating={review.rating} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Reviews;
