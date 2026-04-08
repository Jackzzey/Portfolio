import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white/10 backdrop-blur border-b border-black shadow-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/">
          <img src="/images/jm.png" className="w-10" alt="Logo" />
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-black-700 font-medium">
          <Link to="/" className="hover:text-gray-800 transition">Home</Link>
          <Link to="/whyHire" className="hover:text-gray-700 transition">Why Hire</Link>
          <Link to="/projects" className="hover:text-gray-700 transition">Projects</Link>
          <Link to="/about" className="hover:text-gray-700 transition">About</Link>
          <Link to="/cv" className="hover:text-gray-700 transition">CV</Link>
          <Link to="/contact" className="hover:text-gray-700 transition">Contact</Link>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;