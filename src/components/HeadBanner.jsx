import React from "react";
import * as motion from "motion/react-client";

import "../styles/components/HeadBanner.css";
import Banner from "../assets/images/Banner.png";
import BannerTablet from "../assets/images/Banner-tablet.png";
import BannerPhone from "../assets/images/Banner-phone.png";
import CTA from "./Buttons/CTA";
import Arrow from "../assets/images/tail-right.svg";

const FadeInLeftOneAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
    },
  },
};

const FadeInLeftTwoAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const FadeInLeftThreeAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15,
    },
  },
};

const HeadBanner = () => {
  return (
    <main id="HeadBanner">
      <img src={Banner} className="hero-banner" alt="Bannière" />
      <img src={BannerTablet} className="hero-banner-tablet" alt="Bannière" />
      <img src={BannerPhone} className="hero-banner-phone" alt="Bannière" />
      <div className="hero-content">
        <motion.h1
          className="hero-title text-white"
          variants={FadeInLeftOneAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="font-regular">Association Théâtrale</span>
          <br></br> <span className="font-bold">La Divine Comédie</span>
        </motion.h1>
        <motion.p
          className="hero-paragraph text-white"
          variants={FadeInLeftTwoAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Suivez nous dès aujourd'hui pour connaître nos prochaines
          représentations ainsi que toutes les dernières nouveautés de
          l’association.
        </motion.p>
        <motion.span
          variants={FadeInLeftThreeAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <CTA to="/nos-REPRESENTATIONS">
            Voir nos représentations
            <img src={Arrow} className="arrow-cta" alt="" />
          </CTA>
        </motion.span>
      </div>
    </main>
  );
};

export default HeadBanner;
