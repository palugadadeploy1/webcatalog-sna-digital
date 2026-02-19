import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { smoothScrollTo } from "../utils/smoothScroll";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menus = [
    { label: "Home", icon: <HiHome />, target: "home" },
    { label: "Katalog", icon: <MdDashboard />, target: "katalog" },
    { label: "Kontak", icon: <FaPhoneAlt />, target: "kontak" },
  ];

  const handleNavClick = (target) => {
    setOpen(false);
    
    // Jika user berada di halaman preview (bukan di "/")
    if (location.pathname !== "/") {
      // Pindah ke home dulu
      navigate("/");
      // Beri jeda sedikit agar halaman home termuat baru jalankan scroll
      setTimeout(() => {
        smoothScrollTo(target);
      }, 300);
    } else {
      // Jika sudah di home, langsung scroll
      smoothScrollTo(target);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* BRAND - Klik logo untuk kembali ke paling atas Home */}
          <Link to="/" onClick={() => handleNavClick("home")} className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="SNA Digital" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap top-[3px] relative">
              SNA Digital
            </span>
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <nav className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <button
                key={menu.label}
                onClick={() => handleNavClick(menu.target)}
                className="flex items-center gap-2 text-gray-700 hover:text-brand-primary transition font-medium"
              >
                <span className="text-lg text-brand-primary">{menu.icon}</span>
                {menu.label}
              </button>
            ))}
          </nav>

          {/* ===== MOBILE BUTTON ===== */}
          <button className="md:hidden text-2xl text-gray-800" onClick={() => setOpen(true)}>
            <HiMenu />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-[110] bg-black/30 backdrop-blur-sm flex justify-center items-start pt-24">
          <div className="w-[90%] max-w-sm bg-white rounded-2xl shadow-xl p-6 animate-scaleIn">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="font-bold text-lg">SNA Digital</span>
              </div>
              <button onClick={() => setOpen(false)}><HiX className="text-2xl" /></button>
            </div>

            <ul className="space-y-3">
              {menus.map((menu, i) => (
                <li key={menu.label} className="animate-slideIn" style={{ animationDelay: `${i * 80}ms` }}>
                  <button
                    onClick={() => handleNavClick(menu.target)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition"
                  >
                    <span className="text-brand-primary text-lg">{menu.icon}</span>
                    <span className="font-medium">{menu.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}