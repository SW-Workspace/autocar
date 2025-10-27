import { toTitleCase } from "@/shared/helpers/utils";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

// TODO: Optimize

export default function TopBar() {
  const location = useLocation();
  const currentLocation = location.pathname.split("/");

  const currentPage = useMemo(
    () => toTitleCase(currentLocation[currentLocation.length - 1]),
    [currentLocation],
  );

  return (
    <div className="top-bar w-full h-15 p-4">
      <h1 className="text-3xl font-bold text-[var(--green-primary)]">
        {currentPage}
      </h1>
    </div>
  );
}
