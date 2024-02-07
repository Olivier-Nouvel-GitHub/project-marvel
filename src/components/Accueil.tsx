import { useAuthStatus } from "../hooks/use.auth.status";
import { Authent } from "../components/authent";

export const Accueil = () => {
  const isAuthenticated = useAuthStatus();

  return (
    <div>
      {isAuthenticated ? (
        <div>Bienvenue</div>
      ) : (
        <div>
          <Authent />
        </div>
      )}
    </div>
  );
};
