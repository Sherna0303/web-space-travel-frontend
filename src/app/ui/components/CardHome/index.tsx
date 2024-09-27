import { ReactElement } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const CardHome = (): ReactElement => {
  return (
    <article className="row my-5 py-5 align-items-center  containerCardHome">
      <div className="col-md-7 order-md-2">
        <h2 className="col-10 featurette-heading fw-* lh-2 my-3">
          ¿Has pensado en ir a la{" "}
          <span className="typing-effect-container">
            <span className="typed-text">LUNA?</span>
          </span>
        </h2>
        <p className="lead my-4">
          Nuestro programa liderado por <span className="spanMoonT">MoonT</span>{" "}
          busca llevarte a ti y a tu familia al increíble satélite natural que
          rodea día y noche nuestro planeta tierra. ¿No sería increíble ver la
          tierra desde otra perspectiva? Tal vez suene algo imposible, pero ya
          no más. Ahora disponemos de diferentes planes, los cuales son
          totalmente accesibles para cada persona en el mundo. ¿Qué estás
          esperando para reservar?
        </p>
        <Link to="/catalog" className="btn btn-outline-primary btn-lg">
          Reserva aquí
        </Link>
      </div>
      <div className="col-md-5 order-md-1">
        <figure className="image-container">
          <img
            src="src/assets/images/coheteHome.webp"
            className="imgCohete"
            alt="Imagen de un cohete espacial"
          />
        </figure>
      </div>
    </article>
  );
};
