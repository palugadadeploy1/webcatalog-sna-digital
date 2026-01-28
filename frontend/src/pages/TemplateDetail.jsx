import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { FiShoppingCart } from "react-icons/fi";

export default function TemplateDetail() {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);

  const ADMIN_WA = "6281312178605";

  useEffect(() => {
    api.get(`/templates/${id}`)
      .then(res => {
        setTemplate(res.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  if (!template) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const whatsappMessage = encodeURIComponent(
    `Halo Admin Palugada 👋

Saya tertarik dengan template undangan:

📌 Template: ${template.title}
💰 Harga: Rp ${template.price.toLocaleString("id-ID")}

Mohon info lebih lanjut ya 🙏`
  );

  const whatsappLink = `https://wa.me/${ADMIN_WA}?text=${whatsappMessage}`;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {template.title}
        </h1>
        <p className="text-gray-600">
          {template.description}
        </p>
      </div>

      {/* IFRAME PREVIEW */}
      <div className="w-full h-[600px] border rounded-lg overflow-hidden shadow mb-6">
        <iframe
          src={template.preview_url}
          title="Preview Undangan"
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      {/* FOOTER ACTION */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-2xl font-bold text-indigo-600">
          Rp {template.price.toLocaleString("id-ID")}
        </p>

        <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-5 py-2.5
          bg-indigo-600 text-white
          rounded-lg
          flex items-center gap-2
          hover:bg-indigo-700
          transition
        "
      >
        <FiShoppingCart size={18} />
        <span className="text-sm font-medium">Order</span>
      </a>
      </div>
    </div>
  );
}
