const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        ¿Por qué elegirnos?
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: "0s" }}>
                        <div className="p-6 space-y-4">
                            <div className="mx-auto w-16 h-16 rounded-full bg-[#0056A4]/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-dollar-sign h-8 w-8 text-[#F37513]"
                                >
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground">Precios Competitivos</h3>
                            <p className="text-muted-foreground text-pretty">
                                Las mejores tarifas del mercado sin costos ocultos
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="p-6 space-y-4">
                            <div className="mx-auto w-16 h-16 rounded-full bg-[#0056A4]/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-car h-8 w-8 text-[#0056A4]"
                                >
                                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                                    <circle cx="7" cy="17" r="2"></circle>
                                    <path d="M9 17h6"></path>
                                    <circle cx="17" cy="17" r="2"></circle>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground">Flota Moderna</h3>
                            <p className="text-muted-foreground text-pretty">
                                Vehículos nuevos y bien mantenidos
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="p-6 space-y-4">
                            <div className="mx-auto w-16 h-16 rounded-full bg-[#0056A4]/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-headphones h-8 w-8 text-[#F37513]"
                                >
                                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground">Atención 24/7</h3>
                            <p className="text-muted-foreground text-pretty">
                                Soporte al cliente disponible todo el día
                            </p>
                        </div>
                    </div>

                    <div
                        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="p-6 space-y-4">
                            <div className="mx-auto w-16 h-16 rounded-full bg-[#0056A4]/10 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-shield h-8 w-8 text-[#0056A4]"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground">Seguro Incluido</h3>
                            <p className="text-muted-foreground text-pretty">
                                Protección completa en todos nuestros vehículos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
