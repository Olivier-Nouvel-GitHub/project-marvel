import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  const { idHero, nameHero } = useParams();
  return (
    <div>
      <SuperContainer>
        id: {idHero} nom : {nameHero}
      </SuperContainer>
    </div>
  );
};
