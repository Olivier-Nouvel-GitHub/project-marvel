import React from "react";
import { useAuthStatus } from "../hooks/use.auth.status";
import { Authent } from "./Authent";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  children,
}) => {
  const isAuthenticated = useAuthStatus();
  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page d'authent
    return <Authent />;
  }

  // Si l'utilisateur est authentifié, afficher le composant enfant
  return <>{children}</>;
};
