import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return isAuthenticated;
};
