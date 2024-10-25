import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email === "admin@moont.com" && password === "admin") {
      setError("");
      navigate("/admin/dashboard");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="stars-background"></div>
      <div className="card login-card">
        <h2 className="title-login text-center text-white glow-text">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="form-animated">
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-white">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="form-control input-space"
              placeholder="admin@moont.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-white">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control input-space"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-cohete w-100 mt-3">
            Iniciar Sesión
          </button>
          <p className="error-text text-danger">{error}</p>
        </form>
        <p className="mt-4 text-center text-white-50">
          ¿Eres cliente?{" "}
          <Link to="/" className="home-link">
            Click Aquí
          </Link>
        </p>
      </div>
    </div>
  );
};
