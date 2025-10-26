import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { ArrowLeft } from "lucide-react";
import { useAuth, type SignType } from "@/shared/hooks/useAuth";

type SignUpType = Partial<SignType> & { confirmPassword: string };

export default function Register() {
  const { supabaseSignUpUser } = useAuth();

  const [form, setForm] = useState<SignUpType>({
    first_name: "",
    last_name: "",
    email: "",
    phone: 0,
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: string,
  ): void => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await supabaseSignUpUser(form);
      console.log(res);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="min-h-dvh relative bg-gradient-to-br from-[var(--green-primary)] text-gray-800 to-[var(--blue-tertiary)] flex justify-center items-center p-4">
      <Link
        to="/"
        className="flex items-center gap-2 font-semibold text-sm justify-center absolute left-4 top-4 text-white"
      >
        <ArrowLeft className="size-4" />
        Regresar
      </Link>
      <div className="bg-white rounded-lg shadow-lg w-sm md:w-md lg:w-lg p-6 max-sm:mt-8">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-[#003d74]">Registrase</h1>
          <p className="text-gray-600 text-sm mt-1">
            Crea tu cuenta de WillCar
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.first_name}
                onChange={(e) => handleChange(e, "first_name")}
                placeholder="Jhon"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                required
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={form.last_name}
                onChange={(e) => handleChange(e, "last_name")}
                placeholder="Doe"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={(e) => handleChange(e, "email")}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Numero de telefono
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={(e) => handleChange(e, "phone")}
              placeholder="1234567890"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={(e) => handleChange(e, "password")}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirma tu Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={(e) => handleChange(e, "confirmPassword")}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[var(--yellow-secondary)] font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Registrase
          </button>

          <div className="flex flex-col text-sm md:flex-row justify-center text-center gap-1 pt-4 border-t border-gray-200">
            <span className="text-gray-600">¿Ya tienes una cuenta?</span>
            <Link
              to="/auth/login"
              className="text-[var(--blue-tertiary)] font-semibold hover:underline"
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
