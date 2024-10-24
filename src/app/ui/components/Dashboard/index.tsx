import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Icon from "../../elements/Icon/inde";

interface Solicitud {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  pais: string;
  plan: string;
}

export const Dashboard = () => {
  const [requests, setRequests] = useState<Solicitud[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("requests");
    if (data) {
      setRequests(JSON.parse(data));
    }
  }, []);

  const numRequests = requests.length;

  return (
    <div className="dashboard-container">
      <aside
        className={`sidebar ${sidebarOpen ? "open" : "closed"} position-fixed`}
      >
        <button
          className="toggle-button outline-light"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "←" : "→"}
        </button>
        <div className="container-links">
          {sidebarOpen ? (
            <h3 className="text-center">MoonT Admin</h3>
          ) : (
            <Icon size={30} color={"#00bfff"} icon={"rocket-takeoff-fill"} />
          )}
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link">
                <Icon size={30} color={"#ffff"} icon={"speedometer2"} />
                <span className={sidebarOpen ? "" : "span-hide"}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="requests" className="nav-link">
                <Icon size={30} color={"#ffff"} icon={"envelope"} />
                <span className={sidebarOpen ? "" : "span-hide"}>Requests</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <Icon size={30} color={"#ffff"} icon={"box-arrow-left"} />
                <span className={sidebarOpen ? "" : "span-hide"}>Exit</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className="dashboard-content">
        <h2 className="glow-text">Bienvenido al Dashboard</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Total de Solicitudes</h3>
            <p>{numRequests}</p>
          </div>
          <div className="stat-card">
            <h3>Nombres Registrados</h3>
            <ul>
              {requests.map((sol) => (
                <li key={sol.id}>{sol.nombre}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};