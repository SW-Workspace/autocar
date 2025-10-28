import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { supabaseRecoveryPasswordByEmail } from "@/shared/services/auth/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";

const recoverFormSchema = z.object({
  email: z.string().email(),
});

type RecoverFormFields = z.infer<typeof recoverFormSchema>;

export default function Recover() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RecoverFormFields>({
    resolver: zodResolver(recoverFormSchema)
  });

  const onSubmit: SubmitHandler<RecoverFormFields> = async (data) => {
    try {
      await supabaseRecoveryPasswordByEmail(data.email);
      alert("Se ha enviado un correo de recuperación")
    } catch (error) {
      setError("email", {
        message:
          error instanceof Error
            ? error.message
            : "Algo salió mal, revisa el correo",
      });
    }
  };

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
          <h1 className="text-2xl font-bold text-[#003d74]">
            Recupera tu Contraseña
          </h1>
          <p className="text-gray-600 mt-2">
            Ingresa tu email para enviarte un correo de recuperación
          </p>
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
                required: "Por favor ingresa un correo válido",
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--yellow-secondary)] cursor-pointer font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            {isSubmitting ? "Enviando..." : "Enviar Correo"}
          </button>
          <div className="flex flex-col text-sm md:flex-row justify-center text-center gap-1 pt-4 border-t border-gray-200">
            ¿Ya tienes cuenta?
            <Link
              to="/auth/login"
              className="text-[var(--blue-tertiary)] hover:underline font-semibold"
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
