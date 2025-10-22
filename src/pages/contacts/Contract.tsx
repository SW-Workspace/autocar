import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="contact-container min-h-dvh flex flex-col items-center gap-24 p-6 mt-10">
        <div className="contact-info flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-6xl leading-normal">Contáctanos</h1>
          <p className="text-slate-600 text-lg max-w-[60ch] mx-auto text-center">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
            lo antes posible.
          </p>
        </div>
        <div className="contact-grid flex justify-center *:w-1/2 gap-8 w-full px-24">
          <div className="message-container bg-white w-full flex flex-col gap-4 border-slate-200 p-8 shadow shadow-neutral-200/50 h-full rounded-2xl">
            <h2 className="font-bold text-3xl">Envíanos un Mensaje</h2>
            <div className="name-and-lastname flex items-center gap-4 *:w-1/2 justify-between w-full">
              <div className="name flex flex-col gap-2">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="border border-slate-400 rounded-lg w-full h-10 px-2 placeholder:text-slate-300"
                />
              </div>
              <div className="lastname flex flex-col gap-2">
                <label htmlFor="lastname">Apellido</label>
                <input
                  type="text"
                  placeholder="Apellido"
                  className="border border-slate-400 rounded-lg w-full h-10 px-2 placeholder:text-slate-300"
                />
              </div>
            </div>
            <div className="email flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="tu@gmail.com"
                className="border border-slate-400 rounded-lg w-full h-10 px-2 placeholder:text-slate-300"
              />
            </div>
            <div className="telefono flex flex-col gap-2">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                placeholder="+593 99 123 4567"
                className="border border-slate-400 rounded-lg w-full h-10 px-2 placeholder:text-slate-300"
              />
            </div>
            <div className="message flex flex-col gap-2">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows={10}
                placeholder="Escribe tu mensaje aquí..."
                className="border border-slate-400 placeholder:text-slate-300 rounded-lg w-full p-3"
              ></textarea>
            </div>
            <button className="font-semibold bg-[#F4832A] rounded-lg h-12 cursor-pointer">
              Enviar Mensaje
            </button>
          </div>
          <div className="contact-info flex flex-col gap-8">
            <h3 className="font-bold text-2xl">Información de Contacto</h3>
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex justify-start items-center p-4 gap-4 bg-white rounded-2xl h-30"
              >
                <div className="icon rounded-full p-2 bg-cyan-500/20 text-blue-500">
                  <Phone />
                </div>
                <div className="text flex flex-col justify-center">
                  <div className="title text-lg font-semibold">Teléfono</div>
                  <div className="numbers">
                    <span className="text-slate-400">+593 2 123 4567</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="map w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.3338613955597!2d-90.36782754532477!3d15.466037270622872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sec!4v1761165002330!5m2!1sen!2sec"
            className="w-full"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
