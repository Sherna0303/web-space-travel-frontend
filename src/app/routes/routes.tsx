import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../ui/layouts/layout-main";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={"/home"} />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
