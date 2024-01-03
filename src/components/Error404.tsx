import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      Cette page n'existe pas. <br />
      <Link to="/">Revenir à l'accueil</Link>
    </div>
  );
};
