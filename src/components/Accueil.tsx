import { Link } from "react-router-dom";
import styled from "styled-components";

const AccueilStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9cd1d5;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Intro = styled.div`
  color: #084c7c;
  font-size: 1.3rem;

  a:link,
  a:visited,
  a:hover {
    color: #55471e;
  }

  p {
    margin-top: 2rem;
  }
  font-size: 1.3rem;
`;

export const Accueil = () => {
  return (
    <AccueilStyle>
      <Intro>
        <p>
          Bonjour et bienvenue sur cette application qui a pour but de démontrer
          mes compétences en développement.
        </p>
        <p>
          Il utilise l'<b>API</b> du site marvel afin d'afficher des héros de
          comics et de proposer un profil permettant d'avoir des favoris, un
          dark mode etc.
        </p>
        <p>
          Vous en apprendrez plus dans la section{" "}
          <Link to="/doc">Documentation</Link> concernant la réalisation
          technique et vous pouvez me joindre sur
          <Link to="https://www.linkedin.com/in/olivier-nouvel-936b96b1/">
            {" "}
            Linkedin
          </Link>
          . Bonne visite !
        </p>
        <br />
      </Intro>
    </AccueilStyle>
  );
};
