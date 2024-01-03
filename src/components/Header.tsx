import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuStyle = styled.nav`
  color: blue;
  font-size: 18px;
  font-weight: bold;
  display: flex;

  a {
    padding-right: 1rem;
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: #162367;
  }

  a:hover {
    color: #70aded;
  }

  hr {
    border: 5px solid;
  }

  img {
    width: 1.3rem;
    height: 1.3rem;
    object-fit: cover;
  }
`;

export const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <MenuStyle>
          <img
            src="https://i.ibb.co/wKqKMsg/captain.png"
            alt="captain america icon"
          />
          <Link to="/">Accueil</Link>

          <img
            src="https://i.ibb.co/W2twRQw/deadpool.png"
            alt="deadpool icon"
          />
          <Link to="/comics">Comics</Link>
          <img src="https://i.ibb.co/tsDyJ4K/hulk.png" alt="hulk icon" />
          <Link to="/favorites">Favoris</Link>

          <img
            src="https://i.ibb.co/RDKRJ8v/spiderman.png"
            alt="spiderman icon"
          />
          <Link to="/documents">Documentation</Link>
        </MenuStyle>
      </HeaderStyle>
      <hr />
    </div>
  );
};
