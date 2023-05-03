import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { facebook, instagramHeader, logo } from "../config";
import '../style/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="header_container">
      <div className="facebook-block-header">
        <Link aria-label="lien facebook" to="https://www.facebook.com/profile.php?id=100067888141176"
          target="_blank">
          <img src={facebook}
            alt="Facebook"
            className="facebook" /></Link>
        <Link aria-label="Lien instagram" to="https://www.instagram.com/betmenuiseries"
          target="_blank">
          <img src={instagramHeader}
            alt="Instagram"
            className="facebook" /></Link>
      </div>

      <nav className="header_bloc-nav">
        <div className="header_bloc-nav-icon">
          <img src={logo}
            alt="B&Menuiseries" />
        </div>

        <div className="burger">
          <div className="burger-btn"
            onClick={toggle}>

            <div className={open ? "streak-first-close" : ""}></div>
            <div className={open ? "streak-second-close" : ""}
              id="streakTwo"></div>
            <div className={open ? "streak-third-close" : ""}></div>

          </div>
        </div>

        <ul className={open ? "burger-nav-links" : "burger-nav-links-close"}>

          {<NavLink aria-label="Onglet accueil" onClick={toggle} to="/"
            className={({ isActive }) =>
              isActive ? "header-links" : "header-nolinks"}>
            <li>Accueil</li>
          </NavLink>}
          <div className="header_link"></div>

          <NavLink aria-label="Onglet prestations" onClick={toggle} to="/prestations/"
            className={({ isActive }) =>
              isActive ? "header-links" : "header-nolinks"}>
            <li>Prestations</li>
          </NavLink>
          <div className="header_link"></div>

          <NavLink aria-label="Onglet contact" onClick={toggle} to="/contact"
            className={({ isActive }) =>
              isActive ? "header-links" : "header-nolinks"}>
            <li>Contact</li>
          </NavLink>
          <div className="header_link"></div>

          <NavLink aria-label="Onglet avis" onClick={toggle} to="/avis"
            className={({ isActive }) =>
              isActive ? "header-links" : "header-nolinks"}>
            <li>Avis</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;