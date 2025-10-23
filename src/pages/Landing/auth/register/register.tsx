import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#1966AD] to-[#003d74] flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-sm md:w-md lg:w-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-xl font-bold text-[#003d74]">Registrase</h1>
                    <p className="text-gray-600 text-sm mt-1">Crea tu cuenta de AutoCard</p>
                </div>
                
                <form className="space-y-4">
                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                                Nombre
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Jhon"
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">
                                Apellido
                            </label>
                            <input 
                                type="text" 
                                name="lastName" 
                                id="lastName" 
                                placeholder="Doe"
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Correo electrónico
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Numero de telefono
                        </label>
                        <input 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            placeholder="1234567890"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirma tu Contraseña
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                    >
                        Registrase
                    </button>
                    
                    <div className="flex flex-col md:flex-row justify-center text-center gap-1 pt-4 border-t border-gray-200">
                        <span className="text-gray-600">¿Ya tienes una cuenta?</span>
                        <Link to="/auth/login" className="text-[#1966AD] hover:text-[#003d74] font-semibold hover:underline">Inicia sesión</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}