import { useAuth } from "@/shared/hooks/useAuth";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

// TODO: Optimize

export default function Sidenav() {
  const { supabaseCloseSession } = useAuth();

  const options = [
    {
      name: "Inicio",
      path: "/dashboard/inicio",
    },
    {
      name: "Autos",
      path: "/dashboard/autos",
    },
    {
      name: "Ajustes",
      path: "/dashboard/ajustes",
    },
  ];

  const handleLogOut = async () => {
    await supabaseCloseSession();
  };

  return (
    <div className="sidenav-container w-3xs h-dvh bg-[var(--green-primary)] text-white">
      <div className="options flex flex-col items-start h-full">
        <div className="logo w-full flex justify-center items-center py-2">
          <Link to="/">
            <img
              src="/favicon/favicon-96x96.png"
              alt="Logo"
              className="rounded-full w-20"
            />
          </Link>
        </div>
        {options.map((option, i) => (
          <Link
            key={i}
            to={option.path}
            className="p-4 w-full border-y border-y-green-700 hover:bg-green-800 font-semibold transition"
          >
            {option.name}
          </Link>
        ))}
        <span className="flex-1"></span>
        <button
          onClick={handleLogOut}
          className="text-white flex justify-start gap-2 items-center w-full p-4 font-semibold cursor-pointer bg-red-500"
        >
          <LogOut />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
