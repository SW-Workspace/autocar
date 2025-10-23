import { Outlet } from "react-router-dom";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { useLocation } from "react-router-dom";
import Main from "./main/Main";

export default function Landing() {
  const location = useLocation();

  return (
    <>
      <div className="bg-slate-100 min-h-dvh flex flex-col">
        <Header />
        <div className="flex-1">
          {location.pathname === "/" ? <Main /> : <Outlet />}
        </div>
        <Footer />
      </div>
    </>
  );
}
