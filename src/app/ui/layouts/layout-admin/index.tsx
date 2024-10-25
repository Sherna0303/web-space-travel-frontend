import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import StarBackground from "../../components/StarBackground";
//import { Footer } from "../../components/Footer";
import { Container } from "react-bootstrap";

const AdminLayout: React.FC = () => {
  return (
    <Container className="layout-wrapper">
      <StarBackground/>
      <main className="row content-wrapper">
        <Outlet />
      </main>
    </Container>
  );
};

export default AdminLayout;
