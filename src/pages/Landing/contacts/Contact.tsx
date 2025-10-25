import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="contact-container min-h-dvh flex flex-col items-center gap-24 p-6 mt-16">
        <div className="contact-info flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-5xl leading-normal text-[var(--blue-tertiary)] max-xl:text-4xl">
            Contáctanos
          </h1>
          <p className="text-slate-600 text-lg max-w-[60ch] mx-auto text-center">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
            lo antes posible.
          </p>
        </div>
        <div className="contact-grid flex justify-center *:w-1/2 gap-8 w-full px-24 max-2xl:px-10 max-xl:px-4 max-lg:flex-col max-lg:items-center max-lg:*:w-full">
          <div className="message-container bg-white w-full flex flex-col gap-4 border-slate-200 p-8 shadow shadow-neutral-200/50 h-full rounded-2xl">
            <h2 className="font-bold text-3xl max-xl:text-2xl text-[var(--blue-tertiary)]">
              Envíanos un Mensaje
            </h2>
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
            <button className="font-semibold bg-[var(--yellow-secondary)] rounded-lg h-12 cursor-pointer">
              Enviar Mensaje
            </button>
          </div>
          <div className="contact-info flex flex-col gap-8">
            <h3 className="font-bold text-2xl text-[var(--blue-tertiary)] max-xl:text-xl">
              Información de Contacto
            </h3>
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex justify-start items-center p-4 gap-4 bg-white rounded-2xl h-30"
              >
                <div className="icon rounded-full p-3 bg-[var(--blue-tertiary)]/10 text-[var(--blue-tertiary)]">
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
        <div className="map-container w-full">
          <div className="map max-w-5xl mx-auto rounded-md border border-slate-200/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.8092443026623!2d-73.12309866195122!3d7.119121206519065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68157af751c0ed%3A0x75a0e4551148c36c!2sBucaramanga%2C%20Santander%2C%20Colombia!5e0!3m2!1sen!2sec!4v1761273237550!5m2!1sen!2sec"
              className="w-full rounded-lg"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
