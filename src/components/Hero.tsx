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
    background-color: #084c7c;
    color: #f7b615;
    font-weight: bold;
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
  height: 19rem;
  img {
    transform: scale(var(--img-scale));
    transition: transform 0.5s ease;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  img:hover {
    --img-scale: 1.1;
  }
`;

export const Hero = () => {
  return (
    <SuperContainer>
      <Container>
        <HeroCard>
          <div>
            <img
              src="https://i.ibb.co/zQHb94d/captainmurica.webp"
              alt="captain murica"
              className="captainmurica"
            />
          </div>
        </HeroCard>
        <div className="heroName">Captain America</div>
      </Container>
      <Container>
        <HeroCard>
          <div>
            <img
              src="https://i.ibb.co/zQHb94d/captainmurica.webp"
              alt="captain murica"
              className="captainmurica"
            />
          </div>
        </HeroCard>
        <div className="heroName">Captain America</div>
      </Container>
      <Container>
        <HeroCard>
          <div>
            <img
              src="https://i.ibb.co/zQHb94d/captainmurica.webp"
              alt="captain murica"
              className="captainmurica"
            />
          </div>
        </HeroCard>
        <div className="heroName">Captain America</div>
      </Container>
      <Container>
        <HeroCard>
          <div>
            <img
              src="https://i.ibb.co/zQHb94d/captainmurica.webp"
              alt="captain murica"
              className="captainmurica"
            />
          </div>
        </HeroCard>
        <div className="heroName">Captain America</div>
      </Container>
      <Container>
        <HeroCard>
          <div>
            <img
              src="https://i.ibb.co/zQHb94d/captainmurica.webp"
              alt="captain murica"
              className="captainmurica"
            />
          </div>
        </HeroCard>
        <div className="heroName">Captain America</div>
      </Container>
      <Container>
        <HeroCard>
          <div>
            <img
              src="https://i.ibb.co/zQHb94d/captainmurica.webp"
              alt="captain murica"
              className="captainmurica"
            />
          </div>
        </HeroCard>
        <div className="heroName">Captain America</div>
      </Container>
    </SuperContainer>
  );
};
