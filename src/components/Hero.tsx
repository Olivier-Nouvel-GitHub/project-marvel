import styled from "styled-components";
import { GetHeroesList } from "../services/Api";
import { useEffect, useState } from "react";

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

export const Hero = () => {
  type Hero = {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  type HeroesArray = Hero[];
  const [heroesData, setHeroesData] = useState<HeroesArray>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetHeroesList();
        setHeroesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SuperContainer>
      {Array.isArray(heroesData) ? (
        heroesData.map((hero) => (
          <Container>
            <HeroCard key={hero.id}>
              <div>
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt="captain murica"
                  className="captainmurica"
                />
              </div>
            </HeroCard>
            <div className="heroName">{hero.name}</div>
          </Container>
        ))
      ) : (
        <p>Les données des héros ne sont pas valides.</p>
      )}
    </SuperContainer>
  );
};
