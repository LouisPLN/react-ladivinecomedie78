import React from "react";
import "../styles/pages/Comedy.css";
import { REPRESENTATIONS } from "../Data";
import Section from "../components/Section";
import H2 from "../components/Divers/H2";
import Subtitle from "../components/Divers/Subtitle";
import Paragraph from "../components/Divers/Paragraph";
import Linker from "../components/Buttons/Linker";
import CTA from "../components/Buttons/CTA";
import MiniLink from "../components/Divers/MiniLink";
import H3 from "../components/Divers/H3";
import CardRep from "../components/Divers/CardRep";

import IconProg from "../assets/images/icon-prog.svg";
import IconPin from "../assets/images/icon-pin.svg";
import IconSave from "../assets/images/icon-save.svg";

import Affiche from "../assets/images/dinerdefamille.JPG";
import LAPER from "../assets/images/laperruche.png";
// import Affiche from "../assets/images/a-la-une.jpg";
import * as motion from "motion/react-client";
import CarouselRep from "../components/Divers/Carousel";
import CarouselSoon from "../components/Divers/CarouselSoon";
import CarouselFest from "../components/Divers/CarouselFest";

const OpacityInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const FadeInLeftAnimationVariants = {
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

const FadeInRightAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
    },
  },
};

const Comedy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="page-container">
      <div className="section-rep">
        <H2>Disponible en ce moment !</H2>
        <Subtitle>
          À l'occasion d'événements, venez nous retrouver pour nos
          représentation. Ne manquez pas ces soirées uniques et partagez ces
          moments de comédie avec nous !
        </Subtitle>
        <div className="section-topbanner">
          <motion.div
            className="leftSide"
            variants={FadeInLeftAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <H3>“La Perruche”</H3>
            <Paragraph>
              Synopsis : Un couple attend des amis pour dîner, mais ceux-ci ne
              viendront jamais. Ce contretemps anodin déclenche un affrontement
              aussi drôle que mordant. Entre confidences piquantes, révélations
              intimes et quiproquos absurdes, la soirée tourne au duel explosif.
              Chacun accepte de se dire toute la vérité alors qu’aucun n’est
              prêt à l’entendre. Une comédie grinçante et intelligente qui
              explore, avec sensibilité et humour, les tourments éternels du
              couple et de l’amour.
            </Paragraph>
            <div className="content-minilink">
              <MiniLink
                source={IconPin}
                children={"Lieu de la représentation"}
                childrenTwo={
                  "Au Festival Mort de Rire - Théatre Gérard Philipe"
                }
              />
            </div>
            <div className="content-minilink">
              <MiniLink
                source={IconProg}
                children={"Date de la représentation"}
                childrenTwo={"Le 3 Octobre 2025 - à 20h30"}
              />
            </div>
            <div className="content-minilink">
              <MiniLink
                source={IconSave}
                children={"Réservation sur place"}
                childrenTwo={
                  // "Billetterie et réservations : 02 35 74 05 32"
                  "Réservez votre place en ligne. 1€ moins chère que sur place."
                  // "Billetterie sur place. 10 € & 5 € pour les -12 ans"
                }
              />
            </div>
            <div className="hr"></div>
            <CTA
              to="https://www.billetweb.fr/festival-mort-de-rire-2025"
              target={"_blank"}
            >
              Réserver votre place
            </CTA>
          </motion.div>
          <motion.img
            className="rightSide"
            src={LAPER}
            loading="lazy"
            alt="Vu d'une scène de théatre"
            variants={FadeInRightAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
        </div>
        <motion.div
          className="section-bottombanner"
          variants={OpacityInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <H2>Nos futures représentations</H2>
          <Subtitle>
            Retrouvez la programmation de nos futures représentations de l'année{" "}
            {currentYear}, incluant les pièces jouées, les lieux et les dates.
          </Subtitle>
          <div className="REPRESENTATIONS-container">
            <CarouselSoon />
          </div>
        </motion.div>
        <motion.div
          className="section-carousel"
          variants={OpacityInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <H2>
            Quelques images d'
            <span className="font-bold text-blue">Une Semaine… Pas Plus !</span>
          </H2>
          <Subtitle>
            "Une Semaine… Pas Plus !" fait partie des pièces que nous avons eu
            le plaisir de jouer ! Pour découvrir les coulisses, nos actualités
            et bien plus encore, suivez-nous sur nos réseaux sociaux !
          </Subtitle>
          <CarouselRep />
        </motion.div>
      </div>
    </main>
  );
};

export default Comedy;
