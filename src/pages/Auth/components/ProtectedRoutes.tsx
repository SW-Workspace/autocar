import { useAuth } from "@/shared/hooks/useAuth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate("/auth/login", { replace: true });
    }
  }, [isAuthenticated]);

  return <Outlet />;
}
