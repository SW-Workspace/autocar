import { z } from "zod";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/shared/hooks/useAuth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormFields = z.infer<typeof loginFormSchema>;

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(loginFormSchema),
  });

  const { supabaseSignInWithEmail, isAuthenticated, loading } = useAuth();

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      await supabaseSignInWithEmail(data);
    } catch (error) {
      setError("password", {
        message:
          error instanceof Error
            ? error.message
            : "Algo salió mal, revisa las credenciales",
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated && !loading) {
      const from = location.state?.from?.pathname || "/dashboard/inicio";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <section className="min-h-dvh relative bg-gradient-to-br from-[var(--green-primary)] to-[var(--blue-tertiary)] flex justify-center items-center p-4">
      <Link
        to="/"
        className="flex items-center font-semibold gap-2 text-sm justify-center absolute left-4 top-4 text-white"
      >
        <ArrowLeft className="size-4" />
        Regresar
      </Link>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#003d74]">Iniciar Sesión</h1>
          <p className="text-gray-600 mt-2">Accede a tu cuenta de WillCar</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo electrónico
            </label>
            <input
              {...register("email", {
                required: "Ingresa un email válido",
              })}
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email.message}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>
            <input
              {...register("password", {
                required: true,
              })}
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
            />
            {errors.password && (
              <div className="text-red-500 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-[#1966AD] focus:ring-[#1966AD]"
              />
              <span className="ml-2 text-gray-600">Recordarme</span>
            </label>
            <Link
              to="/auth/recover"
              className="text-[#1966AD] hover:text-[#003d74] hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--yellow-secondary)] cursor-pointer font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            {isSubmitting ? "Cargando..." : "Iniciar sesión"}
          </button>
          <div className="flex flex-col text-sm md:flex-row justify-center text-center gap-1 pt-4 border-t border-gray-200">
            <span className="text-gray-600">¿No tienes una cuenta?</span>
            <Link
              to="/auth/register"
              className="text-[var(--blue-tertiary)] hover:underline font-semibold"
            >
              Regístrate aquí
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
