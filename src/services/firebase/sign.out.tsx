import { auth } from "../../config/firebase.config";
import { NavigateFunction } from "react-router-dom";

export const handleSignOut = async (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  navigate: NavigateFunction
) => {
  event.preventDefault(); // Empêche le comportement par défaut du lien (redirection)

  try {
    await auth.signOut();
    navigate("/");
  } catch (error) {}
};
