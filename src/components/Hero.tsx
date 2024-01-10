import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #9cd1d5;
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  border: 1px solid grey;
  padding-top: 1rem;
`;

const HeroCard = styled.div`
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: white;
  text-align: center;
  padding-bottom: 0.3rem;
  margin: 1rem 1rem 1rem 2.5rem;
  border: solid black 1px;
  img {
    width: 15rem;
    height: auto;
  }
`;

export const Hero = () => {
  return (
    <Container>
      <HeroCard>
        <img
          src="https://i.ibb.co/zQHb94d/captainmurica.webp"
          alt="captain murica"
          className="captainmurica"
        />
        <div>Captain America</div>
      </HeroCard>
      <HeroCard>
        <img
          src="https://i.ibb.co/zQHb94d/captainmurica.webp"
          alt="captain murica"
          className="captainmurica"
        />
        <div>Nom 1</div>
      </HeroCard>
      <HeroCard>
        <img
          src="https://i.ibb.co/zQHb94d/captainmurica.webp"
          alt="captain murica"
          className="captainmurica"
        />
        <div>Nom 1</div>
      </HeroCard>
      <HeroCard>
        <img
          src="https://i.ibb.co/zQHb94d/captainmurica.webp"
          alt="captain murica"
          className="captainmurica"
        />
        <div>Nom 1</div>
      </HeroCard>
      <HeroCard>
        <img
          src="https://i.ibb.co/zQHb94d/captainmurica.webp"
          alt="captain murica"
          className="captainmurica"
        />
        <div>Nom 1</div>
      </HeroCard>
      <HeroCard>
        <img
          src="https://i.ibb.co/zQHb94d/captainmurica.webp"
          alt="captain murica"
          className="captainmurica"
        />
        <div>Nom 1</div>
      </HeroCard>
    </Container>
  );
};
