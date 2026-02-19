import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function TemplateCard({ template }) {
  const waLink = `https://wa.me/6281312178605?text=${encodeURIComponent(
    `Halo Admin, saya tertarik dengan template ${template.title}`
  )}`;

  return (
    <div className="border rounded-lg shadow bg-white overflow-hidden">
      <img
        src={template.preview_url}
        alt={template.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{template.title}</h3>
        <p className="text-gray-600 text-sm">{template.description}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-indigo-600">
            Rp {template.price.toLocaleString("id-ID")}
          </p>

          <div className="flex gap-2">
            <Link
              to={`/template/${template.id}`}
              className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded text-sm"
            >
              Preview
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-indigo-600 text-white rounded"
            >
              <FiShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
