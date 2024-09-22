import { ReactElement } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

export const CardHome = (): ReactElement => {
  return (
    <>
      <section className="row col-md-10 align-items-center containerCardHome">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-* lh-2">
            ¿Has pensado en ir a la{" "}
            <div className="typing-effect-container">
              <span className="typed-text">LUNA?</span>
            </div>
          </h2>
          <p className="lead">
            Nuestro programa liderado por{" "}
            <span className="spanMoonT">MoonT</span> busca llevarte a ti y a tu
            familia al increíble satélite natural que rodea día y noche nuestro
            planeta tierra. ¿No sería increíble ver la tierra desde otra
            perspectiva? Tal vez suene algo imposible, pero ya no más. Ahora
            disponemos de diferentes planes, los cuales son totalmente
            accesibles para cada persona en el mundo. ¿Qué estás esperando para
            reservar?
          </p>
          <Button variant="outline-primary" size="lg">
            Reserva aquí
          </Button>
        </div>
        <div className="col-md-5 order-md-1">
          <div className="image-container">
            <img
              src="/src/assets/images/coheteHome.png"
              className="imgCohete"
              alt="Imagen de un cohete espacial"
            />
          </div>
        </div>
      </section>
    </>
  );
};