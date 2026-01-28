import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Kontak from "../pages/Kontak";
import TemplateDetail from "../pages/TemplateDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/template/:id" element={<TemplateDetail />} />
      </Route>
    </Routes>
  );
}
