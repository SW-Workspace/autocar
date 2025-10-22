import { useState } from "react";
import { Car, User, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 bg-[#0056a4]/98 w-full text-white font-semibold z-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex gap-2 items-center justify-center text-lg">
          <Car size={30}/>
          <Link to="/" className="font-bold">AutoRent</Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link to="offers" className="hover:text-gray-200 transition">
            Ofertas
          </Link>
          <Link to="about" className="hover:text-gray-200 transition">
            Empresas
          </Link>
          <Link to="about" className="hover:text-gray-200 transition">
            Nosotros
          </Link>
          <Link to="contact" className="hover:text-gray-200 transition">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <User size={18} />
            <Link to="/">Iniciar sesión</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#004a8a] px-6 py-4 flex flex-col gap-4 text-sm border-t border-white/20">
          <a href="#" className="hover:text-gray-200 transition">
            Ofertas
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Nosotros
          </a>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Contacto
          </Link>
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <User size={18} />
            <Link to="/">Iniciar sesión</Link>
          </div>
        </div>
      )}
    </header>
  );
}
