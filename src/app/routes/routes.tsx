import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../ui/layouts/layout-main";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { CatalogPage } from "../pages/CatalogPage";
import AdminLayout from "../ui/layouts/layout-admin";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={"/home"} />} />
          <Route path="home" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to={"/admin/login"} />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
