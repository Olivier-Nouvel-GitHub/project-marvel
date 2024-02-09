import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/use.auth.status";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  children,
}) => {
  const isAuthenticated = useAuthStatus();
  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page d'accueil
    return <Navigate to="/" replace />;
  }

  // Si l'utilisateur est authentifié, afficher le composant enfant
  return <>{children}</>;
};
