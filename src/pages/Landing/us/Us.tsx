import {
  Users,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
  ClipboardCheck,
  Eye,
} from "lucide-react";

export default function Us() {
  return (
    <>
      <div className="bg-linear-to-b from-[var(--blue-tertiary)] to-[var(--green-primary)] text-white pb-20 flex flex-col items-end justify-end h-90">
        <div className="title flex flex-col items-center justify-end w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre AutoRent
          </h1>
          <p className="text-center text-lg md:text-xl mb-8 max-w-[60ch]">
            Somos líderes en alquiler de vehículos con más de 15 años de
            experiencia brindando el mejor servicio a nuestros clientes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full h-auto bg-neutral-200 items-center justify-center px-10 py-12">
        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[var(--blue-tertiary)]/10 rounded-full">
              <Users className="w-6 h-6" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">50,000+</h2>
          <p className="text-gray-600">Clientes Satisfechos</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[var(--blue-tertiary)]/10 rounded-full">
              <MapPin className="w-6 h-6" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">25+</h2>
          <p className="text-gray-600">Ubicaciones Comerciales</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[var(--blue-tertiary)]/10 rounded-full">
              <Clock className="w-6 h-6" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">15+</h2>
          <p className="text-gray-600">Años de Experiencia</p>
        </div>

        <div className="bg-white text-[var(--blue-tertiary)] p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[var(--blue-tertiary)]/10 rounded-full">
              <Star className="w-6 h-6" />
            </span>
          </div>
          <h2 className="text-2xl font-bold">98%</h2>
          <p className="text-gray-600">Satisfacción del Cliente</p>
        </div>
      </div>

      <section className="bg-white text-[var(--blue-tertiary)] py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-700  text-lg leading-relaxed">
              Proporcionar servicios de alquiler de vehículos de alta calidad
              que superen las expectativas de nuestros clientes, ofreciendo una
              flota moderna, precios competitivos y un servicio al cliente
              excepcional.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Nuestra Visión
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ser la empresa líder en alquiler de vehículos en la región,
              reconocida por nuestra innovación, compromiso con la
              sostenibilidad y dedicación a la satisfacción del cliente.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Nuestros Valores
            </h2>
            <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
              <li className="flex items-center gap-2 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <ShieldCheck size={18} /> Integridad
              </li>
              <li className="flex items-center gap-2 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <Award size={18} /> Excelencia
              </li>
              <li className="flex items-center gap-2 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <Lightbulb size={18} /> Innovación
              </li>
              <li className="flex items-center gap-2 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <Handshake size={18} /> Compromiso
              </li>
              <li className="flex items-center gap-2 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <ClipboardCheck size={18} /> Responsabilidad
              </li>
              <li className="flex items-center gap-2 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <Eye size={18} /> Transparencia
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
