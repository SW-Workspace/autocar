import valuesData from "../data/valuesData"

export default function Beginning(){
    return(
        <>
        <section className="bg-white text-[#003d74] h-auto py-12 px-3 w-full">
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
            <ul className="flex flex-wrap justify-center gap-3 text-gray-700 font-medium">
              {valuesData.map((data) =>(
                <li className="flex items-center justify-center gap-1 bg-[#e6f0fa] px-4 py-2 rounded-xl shadow-sm">
                <data.icon size={18} />
                {data.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
        </>
    )
}