import styled from "styled-components";

export const Doc = () => {
  const Container = styled.div`
    margin: 2rem;
    padding: 1rem;
    font-family: Helvetica;
    background-image: url("https://i.ibb.co/cQR3v7S/bg-marvel.png");
    background-size: cover;
    background-position: center;
  `;

  const Section = styled.div`
    background-color: #9cd1d5;
    font-size: 1.1rem;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    margin-left: 1rem;
    padding-bottom: 1rem;
    margin-right: 1rem;
    margin-top: 2rem;
    border: solid 1px black;
  `;

  const Title = styled.div`
    width: 100%;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    background-color: #084c7c;
    padding-bottom: 0.6rem;
    padding-top: 0.6rem;
    border-bottom: solid 1px black;
    color: #f7b615;
  `;

  const List = styled.ul`
    padding-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0rem;
    li {
      padding-top: 0.3rem;
    }
  `;
  return (
    <Container>
      <Section>
        <Title>Contraintes</Title>
        <List>
          <li>
            A partir de l'API Marvel https://developer.marvel.com/ , afficher
            une liste de 20 personnages à partir du centième.
          </li>
          <li>
            Chaque item de la liste doit avoir le nom du personnage et son image
            et un clic sur son nom doit afficher le détail du personnage avec
            les informations suivantes :{" "}
            <ul>
              <li>Nom</li>
              <li>Description</li>
              <li>Le nombre de comics où le personnage apparaît</li>
              <li>
                Les titres des 3 premiers comics où le personnage apparaît
              </li>
            </ul>
          </li>
          <li>L'application doit être testée (en cours)</li>
          <li>Veiller à la sécurité des informations de l’application</li>
          <li>Mettre en place un loader </li>
          <li>
            Possibilité de choisir jusqu'à 5 personnages favoris avec
            persistance des personnages choisis
          </li>
          <li>
            Fournir une documentation de l'application permettant de l'exécuter
            facilement sur son poste
          </li>
        </List>
      </Section>
      <Section>
        <Title>Environnement technique</Title>
        <List>
          <li>
            <b>Framework </b>: React (JSX, Hooks, ReactRouter, Redux, Axios)
          </li>
          <li>
            <b>Langage :</b> JavaScript, TypeScript
          </li>
          <li>
            <b>Build :</b> Vite
          </li>
          <li>
            <b>Déploiement :</b> Vercel
          </li>
          <li>
            <b>Base de données :</b> Firebase (RealtimeDatabase et
            Authentification)
          </li>
          <li>
            <b>Formulaire et validation :</b> Formik/Yup
          </li>
          <li>
            <b>Test :</b> Jest
          </li>
          <li>
            <b>Versioning :</b> Git
          </li>
          <li>
            <b>CSS : </b>Flexbox Layout
          </li>
        </List>
      </Section>
      <Section>
        <Title>Déploiement</Title>

        <ul>
          <li>
            Clonez le projet :{" "}
            <code>
              git clone https://github.com/Olivier‑Nouvel‑GitHub/project‑marvel
            </code>
          </li>
          <li>
            Positionnez vous sur le répertoire du projet : cd project-marvel
          </li>
          <li>
            Téléchargez les dépendances avec <code>npm install</code>
          </li>
          <li>
            Lancez le projet en utilisant <code>npm run dev</code>
          </li>
          <li>
            Il devrait être accessible à l'adresse :{" "}
            <code>http://localhost:5173/</code>
          </li>
        </ul>
      </Section>
    </Container>
  );
};
