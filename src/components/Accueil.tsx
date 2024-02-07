import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { Authent } from "../components/authent";

export const Accueil = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
