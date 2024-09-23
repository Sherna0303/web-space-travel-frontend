import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./style.css";

interface Review {
  name: string;
  comment: string;
  rating: number;
}

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
  {
    name: "Sofía Pérez",
    comment: "Muy bonito, experiencia inolvidable, muy buen servicio.",
    rating: 5,
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-warning star">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="row col-12 my-5 reviews-section justify-content-center">
      <h2 className="text-center mb-4 reviews-title">
        Reseñas de nuestros viajeros
      </h2>
      <Row className="row col-9 justify-content-center">
        {reviews.map((review, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="h-100 review-card shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="review-name">{review.name}</Card.Title>
                <Card.Text className="review-comment">"{review.comment}"</Card.Text>
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
