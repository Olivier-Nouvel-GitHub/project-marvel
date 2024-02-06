import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

const HeaderWrapperStyle = styled.div``;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  background-color: #084c7c;
  border-bottom: solid 0.05rem white;
  border-top: solid 0.05rem white;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  max-height: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const MenuProfileStyle = styled.div<{ isVisible: boolean }>`
  width: 15rem;
  border: solid 0.05rem white;
  position: absolute;
  right: 3rem;
  top: 5.25rem;
  color: white;
  display: ${(props) => (props.isVisible ? "block" : "none")};

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin-bottom: 0rem;
    margin-top: 0rem;
    background-color: #2e8de6;
  }
  li {
    margin-left: -2.5rem;
    padding-left: 1rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: #f8e2c9;
    font-weight: bold;
  }
  li:hover {
    background-color: #084c7c;
  }
`;

const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  font-size: 18px;
  font-weight: bold;
  color: #f7b615;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border: solid 0.05rem white;
    padding-right: 1rem;
    clip-path: circle(40% at 40%);
    cursor: pointer;
  }
  img:hover {
    filter: brightness(1.2);
  }
`;

const MenuStyle = styled.nav`
  color: blue;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  a {
    padding-right: 1rem;
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: #f7b615;
  }

  a:hover {
    color: #fdef16;
  }

  img {
    margin-right: 0.3rem;
    width: 1.8rem;
    height: 1.8rem;
  }

  .marvelIcon {
    width: 8rem;
    height: 3rem;
    padding-right: 1.5rem;
  }
`;

export const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        e.target &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleProfileClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setMenuVisible(!isMenuVisible);
  };

  return (
    <HeaderWrapperStyle>
      <MenuProfileStyle ref={menuRef} isVisible={isMenuVisible}>
        <ul>
          <Link to="/register" onClick={closeMenu}>
            <li>Créer un compte</li>
          </Link>

          <a href="#">
            <li>Mon profil</li>
          </a>
          <a href="#">
            <li>Dark mode</li>
          </a>
          <a href="https://developer.marvel.com/">
            <li>Site de l'API Marvel</li>
          </a>

          <a href="https://developer.marvel.com/">
            <li>Se déconnecter</li>
          </a>
        </ul>
      </MenuProfileStyle>
      <HeaderStyle>
        <MenuStyle>
          <img
            src="https://i.ibb.co/yYLT250/marvel.png"
            alt="marvel icon"
            className="marvelIcon"
          />
          <img
            src="https://i.ibb.co/wKqKMsg/captain.png"
            alt="captain america icon"
          />
          <Link to="/">Accueil</Link>

          <img
            src="https://i.ibb.co/W2twRQw/deadpool.png"
            alt="deadpool icon"
          />
          <Link to="/heroesList">Liste des héros</Link>
          <img src="https://i.ibb.co/tsDyJ4K/hulk.png" alt="hulk icon" />
          <Link to="/favorites">Favoris</Link>

          <img
            src="https://i.ibb.co/RDKRJ8v/spiderman.png"
            alt="spiderman icon"
          />
          <Link to="/doc">Documentation</Link>
        </MenuStyle>
        <ProfileStyle>
          <img
            //src="https://i.ibb.co/Rv8xpnK/stark-prof.jpg"
            src="https://i.ibb.co/dpWNvZk/unknown-person.jpg"
            alt="profile icon"
            className="click-trigger"
            onClick={(e) => handleProfileClick(e)}
          />
          Inconnu(e)
        </ProfileStyle>
      </HeaderStyle>
    </HeaderWrapperStyle>
  );
};
