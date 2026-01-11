import React from "react";
import "../styles/pages/About.css";
import TeamLG from "../assets/images/lequipe.jpg";
import TeamSM from "../assets/images/lequipesm.jpg";
import Vincent from "../assets/images/vincent.png";
import Benjamin from "../assets/images/benjamin.png";
import Ophelie from "../assets/images/ophelie.png";
import Etienne from "../assets/images/etienne.png";

import H2 from "../components/Divers/H2";
import Subtitle from "../components/Divers/Subtitle";
import Paragraph from "../components/Divers/Paragraph";

import * as motion from "motion/react-client";

const EQUIPE = [
  {
    id: 1,
    img: Ophelie,
    nom: "Ophélie",
    role: "Comédienne & Présidente de l'association",
  },
  {
    id: 2,
    img: Benjamin,
    nom: "Benjamin",
    role: "Comédien & Chargé de la communication",
  },
  {
    id: 3,
    img: Etienne,
    nom: "Étienne",
    role: "Comédien",
  },
  {
    id: 4,
    img: Vincent,
    nom: "Vincent",
    role: "Régisseur",
  },
];

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SlideInAnimationVariants = {
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

const About = () => {
  return (
    <main className="page-container">
      <H2>À propos de nous</H2>
      <Subtitle>Découvrez notre équipe de choc !</Subtitle>
      <div className="about-content">
        <picture className="all-team">
          <source srcset={TeamSM} media="(max-width: 650px)" />
          <source srcset={TeamLG} media="(min-width: 650px)" />
          <motion.img
          className="all-team"
          src={TeamLG}
          alt="l'équipe la divine comédie"
          loading="lazy"
          variants={SlideInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
        </picture>
        <Paragraph>
          Nous sommes <span className="font-semibold">La Divine Comédie</span>,
          une troupe de théâtre amateur{" "}
          <span className="font-semibold">fondée en 2004</span> par une bande
          d'amis passionnés de théâtre. Depuis nos débuts, nous nous distinguons
          par notre dynamisme et notre engagement, offrant des performances de
          qualité et participant à de nombreux festivals de théâtre amateur à
          travers la France. Parmi nos œuvres, nous avons interprété des pièces
          célèbres telles que{" "}
          <span className="font-italic">"Le Père Noël est une ordure"</span>,{" "}
          <span className="font-italic">"Le Dîner de cons"</span>, et{" "}
          <span className="font-italic">"Espèces menacées"</span>, ainsi que
          notre pièce actuelle{" "}
          <span className="font-italic">"Une Semaine… pas plus !"</span> de
          <span className="font-semibold"> Clément Michel</span>. Composée de
          comédiens talentueux et d'un régisseur dévoué, notre troupe continue
          de captiver les spectateurs avec des productions variées allant de la
          comédie à des œuvres plus sérieuses.
          <span className="font-semibold">
            {" "}
            Notre passion et notre professionnalisme
          </span>{" "}
          nous ont valu de nombreux prix et reconnaissances dans divers
          festivals, témoignant de notre dévouement et de notre talent sur
          scène.
        </Paragraph>
        <div className="card-container">
          {EQUIPE.map((member, index) => (
            <motion.div
              key={member.id}
              className="equipe-card"
              variants={FadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <img src={member.img} alt={member.nom} className="equipe-img" />
              <div className="equipe-info">
                <h3>{member.nom}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
