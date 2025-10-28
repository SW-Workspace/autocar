import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';
import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: string;
}

export const AuthGuard = ({ 
  children, 
  fallback = "/auth/login" 
}: AuthGuardProps) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to={fallback} replace />;
  }
  
  return <>{children}</>;
};

interface RoleGuardProps {
  children: React.ReactNode;
  roles: string[];
  fallback?: string;
}

export const RoleGuard = ({ 
  children, 
  roles, 
  fallback = "/unauthorized" 
}: RoleGuardProps) => {
  const { user, isAuthenticated, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  const userRole = user?.role || 'user';
  
  if (!roles.includes(userRole)) {
    return <Navigate to={fallback} replace />;
  }
  
  return <>{children}</>;
};