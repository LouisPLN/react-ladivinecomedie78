import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Information.css";
import Pill from "./Divers/Pill";

const Information = () => {
  return (
    <section id="Information-Show">
      <div className="info-content">
        <Pill>INFO</Pill>
        <h5>
          {/* Suivez nous sur les réseaux sociaux pour rester à jour sur nos
          actualités ! */}
          Retrouvez nous du{" "}
          <span className="font-bold">
            3 au 5 octobre 2025 au festival Mort de Rire de St-Cyr L’école.
          </span>{" "}
          Plus d’informations en{" "}
          <Link to="/nos-REPRESENTATIONS" className="link-to text-white">
            cliquant ici
          </Link>
          .
        </h5>
      </div>
    </section>
  );
};

export default Information;
