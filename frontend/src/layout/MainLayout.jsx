import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      {/* OFFSET untuk navbar fixed */}
      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
