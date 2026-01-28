import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function TemplateCard({ template }) {
  const ADMIN_WA = "62859106599429";

  const whatsappMessage = encodeURIComponent(
    `Halo Admin Palugada 👋

Saya tertarik untuk memesan undangan digital:

📌 Template: ${template.title}
💰 Harga: Rp ${template.price.toLocaleString("id-ID")}

Mohon info lebih lanjut ya 🙏`
  );

  const whatsappLink = `https://wa.me/${ADMIN_WA}?text=${whatsappMessage}`;

  return (
    <div className="border rounded-lg shadow bg-white overflow-hidden">
      <img
        src={template.preview_url}
        alt={template.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{template.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {template.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-indigo-600">
            Rp {template.price.toLocaleString("id-ID")}
          </p>

          <div className="flex gap-2">
            {/* PREVIEW → HALAMAN DETAIL */}
            <Link
              to={`/template/${template.id}`}
              className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 text-sm"
            >
              Preview
            </Link>

            {/* ORDER → WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-indigo-600 text-white rounded hover:bg-indigo-600"
              title="Order via WhatsApp"
            >
              <FiShoppingCart size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
