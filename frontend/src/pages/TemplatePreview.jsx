import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { getTemplates } from "../services/api";
import Navbar from "../components/Navbar";

export default function TemplatePreview() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTemplates()
      .then((data) => {
        const found = data.find((t) => t.slug === slug);
        setTemplate(found);
      })
      .catch((err) => console.error("Gagal memuat template:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        Memuat preview...
      </div>
    );

  if (!template)
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500">Template tidak ditemukan</p>
        <button
          onClick={() => navigate("/")}
          className="text-brand-primary underline"
        >
          Kembali ke Home
        </button>
      </div>
    );

  const waMessage = encodeURIComponent(
    `Halo SNA Digital, saya ingin memesan undangan template: ${template.name} !`
  );

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. AREA KONTEN - Ditambah pt-16 agar tidak tertutup Navbar */}
      <div className="flex-grow relative w-full overflow-hidden bg-gray-100 pt-16">
        <iframe
          src={template.demo_url}
          title={template.name}
          className="w-full h-full border-none"
          style={{ paddingBottom: "88px" }}
        />
      </div>

      {/* 3. FLOATING ORDER BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="hidden md:block">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Pilihan Anda
            </p>
            <h3 className="font-bold text-lg text-gray-800 leading-none">
              {template.name}
            </h3>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="text-left md:text-right">
              <p className="text-[10px] text-gray-500 uppercase font-bold">
                Harga
              </p>
              <p className="text-xl font-bold text-brand-primary leading-none">
                Rp {template.price.toLocaleString("id-ID")}
              </p>
            </div>

            <a
              href={`https://wa.me/628138201614?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden sm:inline">Order via WhatsApp</span>
              <span className="sm:hidden">Order</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
