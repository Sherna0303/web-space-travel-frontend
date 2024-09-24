import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import "./style.css";
import StarBackground from "../../components/StarBackground";
import { Footer } from "../../components/Footer";
import { Container } from "react-bootstrap";

const MainLayout: React.FC = () => {
  return (
    <Container className="layout-wrapper">
      <StarBackground/>
      <Header />
      <main className="row content-wrapper">
        <Outlet />
      </main>
      <Footer/>
    </Container>
  );
};

export default MainLayout;
