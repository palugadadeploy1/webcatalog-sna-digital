// Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* CONTENT */}
      <main className="flex-1 pt-10 px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
