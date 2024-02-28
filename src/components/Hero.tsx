import styled from "styled-components";
import { RootState } from "../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { addFavHeroToUser } from "../redux/slices/userSlice";
import { addFavHeroToUserService } from "../services/firebase/add.fav.hero.to.user";
import { getAuthId } from "../hooks/get.user.id";
import { useState } from "react";

const SuperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #9cd1d5;
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  border: 1px solid grey;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .heroName {
    text-align: center;
    border-left: solid black 1px;
    border-right: solid black 1px;
    border-bottom: solid black 1px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-left: 2.5rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #2e8de6;
    color: #fdef16;
    font-weight: bold;
    border-top: 1px solid black;
  }
`;
const ResultMessage = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 1rem;
  text-align: center;
  font-weight: bold;
  color: gold;
`;

const HeroCard = styled.div`
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: white;
  text-align: center;
  padding-bottom: 0.3rem;
  margin: 1rem 1rem 0rem 2.5rem;
  border-top: solid black 1px;
  border-left: solid black 1px;
  border-right: solid black 1px;
  width: 15rem;
  height: 14rem;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  img {
    min-height: 15rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  background-color: #9cd1d5;
  margin-top: 1rem;
  font-size: 18px;
  border: 1px solid grey;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-right: 1rem;
  width: 35rem;

  @media screen and (max-width: 600px) {
    border: 0px;
  }

  label {
    font-weight: bold;
  }

  .mainDescription {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-left: 0;
  }
  img {
    max-width: 1.2rem;
  }

  .mainDescription ul {
    list-style-type: disc;
  }
`;

export const Hero = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const userId = getAuthId();
  const currentHero = useSelector(
    (state: RootState) => state.heroes.selectedHero
  );

  const handleAddToFavorites = async (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    if (currentHero) {
      const result = await addFavHeroToUserService(userId, currentHero);
      if (result.success) {
        setSuccessMessage(result.message);
        dispatch(addFavHeroToUser(currentHero));
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setErrorMessage(result.message);
        setTimeout(() => setErrorMessage(""), 3000);
      }
    }
  };

  // Logique de rendu conditionnel pour 'currentHero'
  if (!currentHero) {
    return <div>Aucun héros sélectionné</div>;
  }
  return (
    <div>
      <ResultMessage>
        {successMessage} {errorMessage}
      </ResultMessage>
      <SuperContainer>
        <Container>
          <HeroCard>
            <div>
              <img
                src={`${currentHero.thumbnail.path}.${currentHero.thumbnail.extension}`}
                alt={currentHero.name}
                className={currentHero.name}
              />
            </div>
          </HeroCard>
          <div className="heroName">{currentHero.name}</div>
        </Container>
        <Description>
          <ul className="mainDescription">
            <li>
              <label>Nom :</label> {currentHero.name}
            </li>
            <li>
              <label>Description :</label>{" "}
              {currentHero.description
                ? currentHero.description
                : "Aucune description disponible"}
            </li>
            <li>
              <label>Nombre de comics contenant le personnage :</label>{" "}
              {currentHero.comics.available}
            </li>
            <li>
              <label>3 premiers comics : </label>{" "}
              {currentHero.comics.items &&
              currentHero.comics.items.length > 0 ? (
                <ul>
                  {currentHero.comics.items
                    .slice(0, 3)
                    .map((comic: { name: string }, index: number) => (
                      <li key={index}>{comic.name}</li>
                    ))}
                </ul>
              ) : (
                "Ce personnage n'apparaît dans aucun comic"
              )}
            </li>
            <li>
              <a href="#" onClick={handleAddToFavorites}>
                Ajouter ce personnage à mes favoris
              </a>
            </li>
          </ul>
        </Description>
      </SuperContainer>
    </div>
  );
};
