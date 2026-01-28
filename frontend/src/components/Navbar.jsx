import { Link, useLocation } from "react-router-dom";
import { Home, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Palugada
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`flex items-center gap-2 transition ${isActive("/")}`}
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/kontak"
            className={`flex items-center gap-2 transition ${isActive("/kontak")}`}
          >
            <Phone size={18} />
            Kontak
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-indigo-600"
          >
            <Home size={20} />
            Home
          </Link>

          <Link
            to="/kontak"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-indigo-600"
          >
            <Phone size={20} />
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
