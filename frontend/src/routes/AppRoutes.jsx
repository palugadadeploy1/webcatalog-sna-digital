import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import TemplatePreview from "../pages/TemplatePreview";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Route yang menggunakan Navbar DAN Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Route khusus Preview: Navbar dipanggil manual di dalam, tanpa Footer */}
      <Route path="/template/:slug" element={<TemplatePreview />} />
    </Routes>
  );
}