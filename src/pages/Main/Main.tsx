import { Outlet } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import TopBar from "./components/TopBar";

export default function Main() {
  return (
    <main className="flex w-full h-dvh overflow-hidden">
      <div className="sidenav border-r border-r-neutral-800/20">
        <Sidenav />
      </div>
      <div className="main-content flex-1 flex flex-col bg-slate-100 overflow-y-auto">
        <TopBar />
        <div className="outlet-container p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
