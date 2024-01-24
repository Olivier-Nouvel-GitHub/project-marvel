import styled from "styled-components";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";

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

export const Hero = () => {
  const currentHero = useSelector(
    (state: RootState) => state.heroes.selectedHero
  );
  if (!currentHero) {
    return <div>Aucun héros sélectionné</div>;
  }

  {
    return (
      <div>
        <SuperContainer>
          id: {currentHero.id} nom : {currentHero.name}
        </SuperContainer>
      </div>
    );
  }
};
