import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Kontak() {
  return (
    <div className="flex-1 pt-24 pb-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Kontak Kami
      </h1>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 space-y-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-green-600 transition"
        >
          <FaWhatsapp size={28} className="text-green-500" />
          <div>
            <p className="font-semibold">WhatsApp</p>
            <p className="text-sm text-gray-600">08xxxxxxxxxx</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:palugadaasn111@gmail.com"
          className="flex items-center gap-4 hover:text-blue-600 transition"
        >
          <FaEnvelope size={26} className="text-blue-500" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-gray-600">
              palugadaasn111@gmail.com
            </p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/palugada.uad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-pink-600 transition"
        >
          <FaInstagram size={28} className="text-pink-500" />
          <div>
            <p className="font-semibold">Instagram</p>
            <p className="text-sm text-gray-600">@palugada.uad</p>
          </div>
        </a>
      </div>
    </div>
  );
}
