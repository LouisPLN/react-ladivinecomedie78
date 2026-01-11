import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Nav.css";
import LogoBlack from "../assets/images/Logo-Black.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300); // La durée doit correspondre à la durée de la transition CSS
    } else {
      setMenuOpen(true);
    }
  };
  return (
    <header id="Header-Nav">
      <nav id="Nav">
        <NavLink class="Nav-Logo-Wrap" to="/">
          <img src={LogoBlack} id="Nav-Logo" alt="Logo La Divine Comédie" />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-representations"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Nos représentations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-cours"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Nos cours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos-de-nous"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              À propos de nous
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nous-contacter"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Nous contacter
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="PhoneNav">
        <div className="phone-content">
          <button
            id="BurgerButton"
            onClick={toggleMenu}
            className={menuOpen ? "open" : ""}
          >
            ☰
          </button>
          <NavLink class="Nav-Logo-Wrap" to="/" exact>
            <img src={LogoBlack} id="Nav-Logo" alt="Logo La Divine Comédie" />
          </NavLink>
        </div>
        <ul
          className={`${menuOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}
        >
          <li>
            <NavLink
              to="/"
              exact
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-representations"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              Nos représentations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-cours"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              Nos cours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos-de-nous"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              À propos de nous
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nous-contacter"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={toggleMenu}
            >
              Nous contacter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
