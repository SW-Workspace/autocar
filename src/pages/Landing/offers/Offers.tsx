import OfferCard from "./components/Offercard";
import offersData from "./data/offersData";

export default function Offers() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-6xl py-10 mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Ofertas Especiales
        </h2>
        <p className="text-gray-600 mb-10">
          Aprovecha nuestras promociones exclusivas y ahorra en tu próximo
          alquiler
        </p>

        <div className="grid md:grid-cols-2 justify-center gap-8 max-w-4xl mx-auto w-full">
          {offersData.map((data) =>(
            <OfferCard
              color={data.color}
              icon={<data.icon size={data.small ? 40 : 48}/>}
              title={data.title}
              description={data.description}
              code={data.code}
              valid={data.valid}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
