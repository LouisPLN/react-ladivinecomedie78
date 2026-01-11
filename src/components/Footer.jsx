import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

import IconFacebook from "../assets/images/icon-facebook.svg";
import IconYoutube from "../assets/images/icon-youtube.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer">
      <div className="top-footer">
        <div className="top-content">
          <div className="third-block">
            <h4>Nos informations</h4>
            <a href="mailto:ladivinecomedie78@gmail.com">
              ladivinecomedie78@gmail.com
            </a>
            <a href="tel:0667716441">06.67.71.64.41</a>
            <p>8h - 20h</p>
            <p>39 Avenue du Centre</p>
            <p>78650 Beynes, France</p>
          </div>
          <div className="second-block">
            <h4>Nos réseaux sociaux</h4>
            <div>
              <a
                href="https://www.facebook.com/La-Divine-Comédie-1789844364578891"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconFacebook} alt="icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCnQAhjkJ9UqOZgG9iJPprfg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconYoutube} alt="icon" />
              </a>
            </div>
          </div>
          <div className="first-block">
            <h4>Plan du site</h4>
            <Link to="/">Accueil</Link>
            <Link to="/nos-REPRESENTATIONS">Nos représentations</Link>
            <Link to="/nos-cours">Nos cours</Link>
            <Link to="/a-propos-de-nous">À propos de nous</Link>
            <Link to="/nous-contacter">Nous contacter</Link>
          </div>
          <div className="fourth-block">
            <h4>Mentions légales</h4>
            <Link to="/cgu">Conditions Générales d'Utilisation (CGU) </Link>
            <Link to="/politique-confidentialite">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="hr"></div>
        <p>
          Copyright &copy; La Divine Comédie {currentYear}, Tous droits réservés
        </p>
        <small>
          Made by{" "}
          <a
            href="https://calendly.com/louispoulin-ei/demande-de-devis-de-creation-de-site-web-clone"
            target="_blank"
          >
            Louis
          </a>{" "}
          with 💙
        </small>
      </div>
    </footer>
  );
};

export default Footer;
