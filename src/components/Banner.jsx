import React from "react";
import "../styles/components/Banner.css";
import Pattern from "../assets/images/pattern.svg";
import CTA from "./Buttons/CTA";
import H3 from "./Divers/H3";

const Banner = () => {
  return (
    <section className="section-banner">
      <img src={Pattern} className="pattern-image" alt="" />
      <div className="banner-content">
        <H3><span className="text-white font-bold text-center">Une question ? N’hésitez pas,<br></br> demandez nous !</span></H3>
        <CTA to="/nous-contacter">Contactez nous ici !</CTA>
      </div>
    </section>
  );
};

export default Banner;
