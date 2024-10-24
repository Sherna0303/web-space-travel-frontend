import { useEffect, useState } from "react";
import "./style.css";

import { RequestModel } from "../../../core/models/requests.model";
import { getRequestsService } from "../../../core/services/getRequests.service";
import { SidebarAdmin } from "../SidebarAdmin";

export const Dashboard = () => {
  const [requests, setRequests] = useState<RequestModel[]>([]);

  useEffect(() => {
    setRequests(getRequestsService());
  }, []);

  const numRequests = requests.length;

  return (
    <div className="dashboard-container">

      <SidebarAdmin/>

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
              {requests.map((req, index) => (
                <li key={index}>{req.nombre}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
