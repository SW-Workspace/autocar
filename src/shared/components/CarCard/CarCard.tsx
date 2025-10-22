const CarCard = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Conoce nuestra flota</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Las mejores opciones para que reserves y aproveches</p>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                    <div className="relative h-48 bg-muted overflow-hidden">
                        <img src="https://v0-car-rental-page-seven.vercel.app/compact-economy-car-silver.jpg" alt="Grupo Económico" className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-[#F37513]/90 absolute top-4 right-4 bg-[#F37513] text-accent-foreground">
                        Desde $35/por día
                        </span>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-card-foreground mb-1">Grupo Económico</h3>
                            <p className="text-sm text-muted-foreground">Similar a: Kia Picanto, Chevrolet Spark</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span>5 pasajeros</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                </svg>
                                <span>2 maletas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="m12 14 4-4"></path>
                                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                </svg>
                                <span>Manual</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center [.border-t]:pt-6 p-6 pt-0">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-[#F37513] hover:bg-[#F37513]/90 font-semibold">
                            Reservar Ahora
                        </button>
                    </div>
                </div>
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                    <div className="relative h-48 bg-muted overflow-hidden">
                        <img src="https://v0-car-rental-page-seven.vercel.app/compact-suv-white-modern.jpg" alt="Grupo SUV Compacto" className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-[#F37513]/90 absolute top-4 right-4 bg-[#F37513]">
                            Desde $55/por día
                        </span>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-card-foreground mb-1">Grupo SUV Compacto</h3>
                            <p className="text-sm text-muted-foreground">Similar a: Nissan Kicks, Hyundai Creta</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span>5 pasajeros</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                </svg>
                                <span>3 maletas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="m12 14 4-4"></path>
                                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                </svg>
                                <span>automatica</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-6 pt-0">
                        <button className="w-full bg-[#F37513] hover:bg-[#F37513]/90 font-semibold rounded-md h-9 px-4 py-2 transition-all">
                            Reservar Ahora
                        </button>
                    </div>
                </div>
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                    <div className="relative h-48 bg-muted overflow-hidden">
                        <img src="https://v0-car-rental-page-seven.vercel.app/sedan-car-red-modern.jpg" alt="Grupo Sedán Premium" className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
                        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-[#F37513]/90 absolute top-4 right-4 bg-[#F37513] text-accent-foreground">
                            Desde $65/por día
                        </span>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold text-card-foreground mb-1">Grupo Sedán Premium</h3>
                            <p className="text-sm text-muted-foreground">Similar a: Toyota Corolla, Honda Civic</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span>5 pasajeros</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                </svg>
                                <span>3 maletas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    className="lucide lucide-users h-4 w-4">
                                    <path d="m12 14 4-4"></path>
                                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                </svg>
                                <span>automatica</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-6 pt-0">
                        <button className="w-full bg-[#F37513] hover:bg-[#F37513]/90 font-semibold rounded-md h-9 px-4 py-2 transition-all">
                            Reservar Ahora
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 border-[#0056A4] text-[#0056A4] hover:bg-[#0056A4] hover:text-white bg-transparent">
                    Ver todos los grupos
                </button>
            </div>
        </section>
    )
}

export default CarCard