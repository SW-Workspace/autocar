import { supabase } from "@/config/supabase/supabase";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { supabaseChangePassword } from "@/shared/services/auth/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";

const resetFormSchema = z.object({
  password: z.string(),
});

type ResetFormFields = z.infer<typeof resetFormSchema>;

export default function Reset() {
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormFields>({
    resolver: zodResolver(resetFormSchema)
  });

  const [canRecover, setCanRecover] = useState(false);

  const onSubmit: SubmitHandler<ResetFormFields> = async (data) => {
    try {
      await supabaseChangePassword(data.password);
      alert("Se ha cambiado la contraseña correctamente");
      navigate("/auth/login");
    } catch (error) {
      setError("password", {
        message:
          error instanceof Error
            ? error.message
            : "Algo salió mal, revisa el correo",
      });
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === "PASSWORD_RECOVERY") {
        setCanRecover(true);
      }
    });
  }, []);

  if (isSubmitting) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {canRecover && (
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
              <p className="text-gray-600 mt-2">Ingresa una nueva contraseña</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nueva contraseña
                </label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  id="pasword"
                  placeholder="******"
                  className="w-full px-4 py-3 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-[#1966AD] focus:border-transparent transition"
                />
                {errors.password && (
                  <div className="text-red-500 text-sm">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--yellow-secondary)] cursor-pointer font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                {isSubmitting ? "Cambiando..." : "Cambiar Contraseña"}
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
      )}
    </>
  );
}
