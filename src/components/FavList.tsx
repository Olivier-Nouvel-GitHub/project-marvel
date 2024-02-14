import styled from "styled-components";
import { removeFavHeroFromUser } from "../redux/slices/userSlice";
import { RootState } from "../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { removeFavHeroFromUserService } from "../services/firebase/remove.fav.hero.from.user";
import { auth } from "../config/firebase.config";

const SuperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
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

const NoHeroFound = styled.div`
  width: 100%;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .heroName {
    display: flex;
    align-items: center;
    justify-content: center;
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

    img {
      padding-top: 0.2rem;
      padding-left: 0.4rem;
      width: 1rem;
    }
  }
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
    transform: scale(var(--img-scale));
    transition: transform 0.5s ease;
    min-height: 15rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:hover {
    --img-scale: 1.1;
  }
`;

export const FavList = () => {
  const dispatch = useDispatch();
  const handleRemoveFromFavorites =
    (heroId: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      removeFavHeroFromUserService();
      dispatch(removeFavHeroFromUser(heroId));
    };

  const currentUserId = useSelector(
    (state: RootState) => state.user.authenticatedUser?.id
  );

  const favHeroesList = useSelector(
    (state: RootState) => state.user.authenticatedUser?.favHeroes
  );

  if (!favHeroesList || favHeroesList.length === 0) {
    return (
      <SuperContainer>
        <NoHeroFound>Aucun héros favori trouvé.</NoHeroFound>
      </SuperContainer>
    );
  }
  return (
    <SuperContainer>
      {Array.isArray(favHeroesList) ? (
        favHeroesList.map((hero) => (
          <Container key={hero.id}>
            <HeroCard>
              <div>
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={hero.name}
                  className={hero.name}
                />
              </div>
            </HeroCard>
            <div className="heroName">
              <div>{hero.name} </div>
              <div>
                <a href="#" onClick={handleRemoveFromFavorites(hero.id)}>
                  <img src="https://i.ibb.co/cbBWvbf/cross.png" />
                </a>
              </div>
            </div>
          </Container>
        ))
      ) : (
        <p>Les données des héros ne sont pas valides.</p>
      )}
    </SuperContainer>
  );
};
