import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ViewImage from "./ViewImage";

interface HeroProps {
  group: string;
  brand: string;
  rent_per_day: number;
  urls_img: string[];
}

export default function Hero(props: HeroProps) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = (index:number) => {
     setIndex(index)
  }
  
  return (
    <>
      <section className="flex relative flex-col lg:flex-row justify-around max-lg:justify-center max-lg:gap-4 lg:pl-15 items-center w-full max-lg:mt-8 h-auto md:h-dvh mt-3 lg:mt:0 bg-gradient-to-br from-[var(--blue-tertiary)] to-[var(--green-primary)]">

        <Link 
          to="/catalog"
          className="hidden lg:flex absolute top-10 left-30 items-center text-white text-sm"
        >
          <ArrowLeft size={18}/>
          Regresar
        </Link>

        <div className="flex justify-center items-center py-5 lg:py-0 text-white">
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-bold max-lg:text-3xl">
              Grupo {props.group}
            </span>
            <span>Similar a: {props.brand}</span>
            <div>
              <span className="text-5xl text-[var(--yellow-secondary)] font-bold max-lg:text-4xl">
                ${props.rent_per_day}
              </span>
              <span>/por dia</span>
            </div>
            <div className="flex gap-3">
              <button className="flex gap-1 p-2 items-center bg-[var(--yellow-secondary)] rounded-lg text-sm text-black font-semibold cursor-pointer">
                <Calendar size={16} />
                Reservar Ahora
              </button>
              <button className="flex gap-1 p-2 items-center border border-white rounded-lg text-sm text-white font-semibold cursor-pointer">
                <MapPin size={16} />
                ver ubicaciones
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-max items-start justify-center gap-2 py-5 max-md:px-4">
          <div className="hidden sm:flex flex-col gap-2">
            {props.urls_img.map((url, i) => (
             <img
              key={i}
              className={`w-15 h-15 object-cover rounded-lg bg-[var(--green-primary)] border border-[var(--green-primary)] ${index == i ? "opacity-40": "opacity-100"} cursor-pointer`}
              src={url}
              onClick={()=>handleClick(i)}
            />
            ))}
          </div>
          <div className="inline-block max-w-2xl border-2 border-green-200 bg-[var(--green-primary)] items-center justify-center rounded-lg ">           
            <div className="w-80 h-64 sm:w-140 sm:h-72 md:h-96 relative bg-white/50 backdrop-blur-2xl p-3 rounded-sm overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  src={props.urls_img[index]}
                  onClick={() => setIsOpen(true)}
                />
            </div>
          </div>
        </div>
      </section>

      {isOpen &&
          <ViewImage 
            open={isOpen}
            urls_img={props.urls_img}
            index={index}
            onClose={() => setIsOpen(false)}
          />
      }
    </>
  );
}
