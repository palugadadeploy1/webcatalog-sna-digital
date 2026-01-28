export default function Footer() {
    return (
      <footer
        id="footer"
        className="bg-gray-900 text-gray-300 mt-16"
      >
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 py-4">
          © {new Date().getFullYear()} Palugada. katalog Undangan.
        </div>
      </footer>
    );
  }
  