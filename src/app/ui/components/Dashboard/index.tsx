import { useEffect, useState } from "react";
import "./style.css";

import { RequestModel } from "../../../core/models/requests.model";
import { GetRequestsService } from "../../../core/services/getRequests.service";
import { SidebarAdmin } from "../SidebarAdmin";

export const Dashboard = () => {
  const [requests, setRequests] = useState<RequestModel[]>([]);

  useEffect(() => {
    setRequests(GetRequestsService());
  }, []);

  const numRequests = requests.length;

  return (
    <div className="dashboard-container">
      <SidebarAdmin />

      <main className="dashboard-content">
        <h2 className="glow-text">Bienvenido al Dashboard</h2>
        <div className="stats">
          <div className="stat-card stat-num">
            <p className="stat-num-requests">{numRequests}</p>
            <h3>Total de Solicitudes</h3>
          </div>
          <div className="stat-card">
            <h3 className="stat-title-requests">Ultimas Solicitudes</h3>
            <ul>
              {requests
                .slice(-3)
                .reverse()
                .map((request) => (
                  <li key={request.id}>{request.nombre}</li>
                ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
