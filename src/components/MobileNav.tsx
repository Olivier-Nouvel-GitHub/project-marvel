import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobileNav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const NavMenu = styled.nav`
    display: none;
    @media screen and (max-width: 768px) {
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      li {
        display: flex;
        align-items: center;
        margin-top: 0.4rem;
      }

      a {
        color: #f7b615;
        text-decoration: none;
      }

      .navbar-toggle {
        margin-bottom: -0.2rem;
        width: 5rem;
        height: 2rem;
        margin-top: 8rem;
        cursor: pointer;
      }
    }
  `;
  const NavBarMenu = styled.ul`
    @media screen and (max-width: 768px) {
      padding: 1rem;
      list-style: none;
      margin-right: 1rem;
      margin-top: 0;
      visibility: ${menuVisible ? "visible" : "hidden"};
      background-color: #084c7c;
      bg-color: yellow;
      border-right: solid 1px white;
      border-left: solid 1px white;
      border-bottom: solid 1px white;

      img {
        margin-right: 0.3rem;
        width: 1.2rem;
        height: auto;
      }
    }
  `;

  const ImgMenu = styled.div`
    @media screen and (max-width: 768px) {
      margin-left: 2.5rem;
      margin-top: 1rem;
    }
  `;

  return (
    <NavMenu>
      <div className="container">
        <ImgMenu>
          <img
            src="https://i.ibb.co/yYLT250/marvel.png"
            alt="marvel icon"
            id="menu-toggle"
            className="navbar-toggle"
            onClick={toggleMenu}
          />
        </ImgMenu>

        <NavBarMenu id="menu">
          <li>
            <img
              src="https://i.ibb.co/W2twRQw/deadpool.png"
              alt="deadpool icon"
            />
            <Link to="/heroesList">Liste des héros</Link>
          </li>
          <li>
            <img src="https://i.ibb.co/tsDyJ4K/hulk.png" alt="hulk icon" />
            <Link to="/favorites">Favoris</Link>
          </li>
          <li>
            <img
              src="https://i.ibb.co/RDKRJ8v/spiderman.png"
              alt="spiderman icon"
            />
            <Link to="/doc">Documentation</Link>
          </li>
        </NavBarMenu>
      </div>
    </NavMenu>
  );
};
