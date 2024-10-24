import { useState } from "react";
import Icon from "../../elements/Icon/inde";
import { Link } from "react-router-dom";
import "./style.css";

export const SidebarAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
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
          <h3 className="title-sidebar text-center">MoonT Admin</h3>
        ) : (
          <Icon size={30} color={"#00bfff"} icon={"rocket-takeoff-fill"} />
        )}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link-admin">
              <Icon size={30} color={"#ffff"} icon={"speedometer2"} />
              <span className={sidebarOpen ? "" : "span-hide"}>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="requests" className="nav-link-admin">
              <Icon size={30} color={"#ffff"} icon={"envelope"} />
              <span className={sidebarOpen ? "" : "span-hide"}>Requests</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link-admin">
              <Icon size={30} color={"#ffff"} icon={"box-arrow-left"} />
              <span className={sidebarOpen ? "" : "span-hide"}>Exit</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
