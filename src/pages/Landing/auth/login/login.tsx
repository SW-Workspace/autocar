import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabaseSignInWithEmail } from "@/shared/services/auth/auth.service";

interface FormData {
    email: string,
    password: string
}

export default function Login() {
    const [form, setForm] = useState<FormData>({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };


    return (
        <section className="min-h-screen bg-gradient-to-b from-[#1966AD] to-[#003d74] flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#003d74]">Iniciar Sesión</h1>
                    <p className="text-gray-600 mt-2">Accede a tu cuenta de AutoRent</p>
                </div>
                
                <form 
                    className="space-y-6"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        supabaseSignInWithEmail({
                            email:form.email,
                            password: form.password
                        })
                       navigate("/");
                    }}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Correo electrónico
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
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
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                            required
                        />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-[#1966AD] focus:ring-[#1966AD]" />
                            <span className="ml-2 text-gray-600">Recordarme</span>
                        </label>
                        <a href="#" className="text-[#1966AD] hover:text-[#003d74] hover:underline">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                    >
                        Iniciar Sesión
                    </button>
                    
                    <div className="flex flex-col md:flex-row justify-center text-center gap-1 pt-4 border-t border-gray-200">
                            <span className="text-gray-600">¿No tienes una cuenta?</span>
                            <Link to="/auth/register" className="text-[#1966AD] hover:text-[#003d74] font-semibold hover:underline">Regístrate aquí</Link>

                    </div>
                </form>
            </div>
        </section>
    )
};