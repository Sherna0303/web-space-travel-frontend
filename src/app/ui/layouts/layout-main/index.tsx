import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import "./style.css";
import StarBackground from "../../components/StarBackground";

const MainLayout: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <StarBackground/>
      <Header />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <footer className="footer">
        © 2024 MoomT. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default MainLayout;
