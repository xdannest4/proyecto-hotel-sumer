import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  allowedRoles?: Array<"ADMIN" | "USER">;
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user, isLoading } = useAuth();

  // Esperar a que el contexto verifique el token en localStorage
  if (isLoading) {
    return <div>Cargando sesión...</div>; // O un componente de Spinner
  }

  // Si no hay usuario autenticado
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Si se requieren roles específicos y el usuario no los tiene
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />; // Redirigir al dashboard si no tiene permisos
  }

  return <>{children}</>;
};

export default ProtectedRoute;