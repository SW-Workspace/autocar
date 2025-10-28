import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/shared/hooks/useAuth";
import z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerFormSchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone: z.string(), // TODO: Change this to number and add regex to robust verification
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type RegisterFormFields = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(registerFormSchema),
  });
  const navigate = useNavigate();

  const { supabaseSignUpUser } = useAuth();

  const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    try {
      // TODO: Improve passing the argument
      await supabaseSignUpUser({
        first_name: data.first_name,
        last_name: data.last_name,
        phone: parseInt(data.phone),
        email: data.email,
        password: data.password,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Algo salió mal, inténtalo de nuevo más tarde",
      });
    }
  };

  if (isSubmitting) {
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
          <h1 className="text-xl font-bold text-[#003d74]">Registrarse</h1>
          <p className="text-gray-600 text-sm mt-1">
            Crea tu cuenta de WillCar
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Nombre
              </label>
              <input
                {...register("first_name")}
                type="text"
                id="name"
                placeholder="Jhon"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
              />
              {errors.first_name && (
                <div className="text-red-500 text-sm">
                  {errors.first_name.message}
                </div>
              )}
            </div>
            <div className="space-y-1">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Apellido
              </label>
              <input
                {...register("last_name")}
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
              />
              {errors.last_name && (
                <div className="text-red-500 text-sm">
                  {errors.last_name.message}
                </div>
              )}
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
              {...register("email")}
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email.message}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Número de teléfono
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="1234567890"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
            />
            {errors.phone && (
              <div className="text-red-500 text-sm">{errors.phone.message}</div>
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
              {...register("password")}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
            />
            {errors.password && (
              <div className="text-red-500 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirma tu Contraseña
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer bg-[var(--yellow-secondary)] font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            {isSubmitting ? "Registrando..." : "Regístrate"}
          </button>
          {errors.root && (
            <div className="text-red-500 text-sm">{errors.root.message}</div>
          )}
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
