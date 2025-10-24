import { Car, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[var(--blue-tertiary)] to-[var(--green-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Car className="w-6 h-6" />
            <h2 className="font-bold text-lg">AutoRent</h2>
          </div>
          <p className="text-sm mb-4">
            Tu mejor opción para alquilar vehículos de calidad con el mejor
            servicio.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-300 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-gray-300 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 text-[var(--yellow-secondary)]">
            Institucional
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Carreras
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 text-[var(--yellow-secondary)]">
            Negocios
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Corporativo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Socios
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Franquicias
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 text-[var(--yellow-secondary)]">
            Contactos
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Teléfono: +593 2 123 4567</li>
            <li>Email: info@autorent.com</li>
            <li>
              <a href="#" className="hover:underline">
                Ayuda
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20"></div>

      <div className="text-center py-4 text-sm text-gray-300">
        © 2025 AutoRent. Todos los derechos reservados
      </div>
    </footer>
  );
}
