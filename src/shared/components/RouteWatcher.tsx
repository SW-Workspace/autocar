import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFilters } from "@/config/store/slices/filters/filters.slice";
import type { AppDispatch } from "@/config/store/store";

export default function RouteWatcher() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (
      prevPath.current.startsWith("/catalog") &&
      !location.pathname.startsWith("/catalog")
    ) {
      dispatch(clearFilters());
    }
    prevPath.current = location.pathname;
  }, [location.pathname, dispatch]);

  return null;
}
