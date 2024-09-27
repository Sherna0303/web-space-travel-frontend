import { Card, Container, Row, Col } from "react-bootstrap";
import "./style.css";

interface Trip {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const trips: Trip[] = [
  {
    title: "Conociendo a la Luna",
    description:
      "Disfruta de un breve viaje a la órbita lunar con vistas impresionantes.",
    price: "30,000,000 COP",
    imageUrl: "main/src/assets/images/bronce.webp",
  },
  {
    title: "Vuelta a la Luna",
    description:
      "Explora la cara oculta de la Luna y contempla sus misteriosos paisajes.",
    price: "45,000,000 COP",
    imageUrl: "main/src/assets/images/plata.webp",
  },
  {
    title: "Super Espacial",
    description:
      "Visita el famoso Mar de la Tranquilidad, el lugar de aterrizaje del Apolo 11 y disfruta de nuestros campamentos lunares de lujo.",
    price: "75,000,000 COP",
    imageUrl: "main/src/assets/images/oro.webp",
  },
];

const CardCatalog = () => {
  return (
    <section id="catalog" className="py-5">
      <Container>
        <h2 className="text-white text-center mb-5">Catálogo de Viajes</h2>
        <Row className="gy-4">
          {trips.map((trip, index) => (
            <Col key={index} md={6} lg={4}>
              <Card
                className="h-100 text-white border-0"
                style={{ backgroundColor: "#1b1b1b" }}
              >
                <Card.Img
                  variant="top"
                  src={trip.imageUrl}
                  className="catalog-img"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{trip.title}</Card.Title>
                  <Card.Text className="text-secondary">
                    {trip.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5">{trip.price}</span>
                    <button className="btn btn-outline-light btn-book">
                      Reservar
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CardCatalog;
