import "./style.css";

export const Footer = () => {
  return (
    <footer className="row footer text-light">
      <div className="container text-center">
        <h4 className="mb-4">Explora más sobre nuestros viajes espaciales</h4>

        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="mx-3"
          >
            <img src="./src/assets/icon/github.svg" alt="GitHub" className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="mx-3"
          >
            <img src="./src/assets/icon/linkedin.svg" alt="LinkedIn" className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="mx-3"
          >
            <img src="./src/assets/icon/twitter-x.svg" alt="Twitter" className="footer-icon" />
          </a>
        </div>

        <p className="footer-text">&copy; 2024 MoonT. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
