import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Lesson.css";
import Section from "../components/Section";
import H3 from "../components/Divers/H3";
import H2 from "../components/Divers/H2";
import Subtitle from "../components/Divers/Subtitle";
import Paragraph from "../components/Divers/Paragraph";
import CardPrice from "../components/Divers/CardPrice";
import Linker from "../components/Buttons/Linker";
import BulletinEnfants from "../assets/images/Bulletin d'adhésion 2024-2025.docx";
import BulletinAdulte from "../assets/images/Bulletin d'adhésion adultes 2024-2025.docx";

import Donat from "../assets/images/donat-guibert.png";
import MAS from "../assets/images/mas.jpg";
import CoursLG from "../assets/images/cours-lg.png";
import CoursSM from "../assets/images/cours-sm.png";
import Fill from "../assets/images/fill.svg";
import Arrow from "../assets/images/icon-arrow.svg";

import * as motion from "motion/react-client";

const coursData = [
  {
    id: 1,
    title: "Échauffement de la voix",
    description: "Améliorez la projection et l'expressivité.",
    color: "#CADEFD",
  },
  {
    id: 2,
    title: "Travail de l'articulation",
    description: "Clarifiez votre diction.",
    color: "#EC4E50",
  },
  {
    id: 3,
    title: "Jeux sur l'occupation de l'espace",
    description: "Utilisez l'espace scénique efficacement.",
    color: "#3BF0F0",
  },
  {
    id: 4,
    title: "Direction de l'acteur",
    description: "Perfectionnez votre jeu et votre présence scénique.",
    color: "#D3D3F3",
  },
];

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Lesson = () => {
  return (
    <main className="page-container">
      <H2>Nos cours</H2>
      <Subtitle>Des cours de théâtre pour tous !</Subtitle>
      <section className="cours-container">
        <Paragraph>
          Profitez de nos cours adaptés à tous les niveaux, que vous soyez
          débutant ou comédien confirmé. Nos séances sont conçues pour
          développer vos compétences théâtrales de manière complète et ludique.
          Que vous soyez extraverti ou introverti, nos cours sont conçus pour
          vous aider à exprimer votre créativité et à développer votre confiance
          en vous. Rejoignez-nous et plongez dans le monde fascinant du théâtre
          avec <span className="font-bold">La Divine Comédie</span> !
        </Paragraph>
        <div className="cours-divider">
          <div className="cours-left">
            <img id="fill" src={Fill} alt="Fill" />
            <picture className="cours-image-container">
              <source srcset={CoursSM} media="(max-width: 650px)" />
              <source srcset={CoursLG} media="(min-width: 650px)" />
              <img
                src={CoursLG}
                className="cours-image"
                alt="Cours de théâtre"
              />
            </picture>
          </div>
          <div className="cours-right">
            <ul>
              {coursData.map((cours, index) => (
                <motion.li
                  key={cours.id}
                  variants={FadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <span
                    className="t font-semibold"
                    style={{ borderColor: cours.color }}
                  >
                    {cours.title} :
                  </span>{" "}
                  <p>{cours.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section
        children={""}
        childrenTwo={
          <div id="hours-container">
            <H3>
              Pour <span className="text-blue font-bold">les grands</span> et{" "}
              <span className="text-blue font-bold">les petits !</span>
            </H3>
            <Paragraph>
              Découvrez nos cours de théâtre ouverts à tous les âges, où chaque
              groupe bénéficie d'une attention adaptée à son niveau et à ses
              besoins. Les cours sont dirigés par{" "}
              <Link
                to="https://www.donatguibert.fr/"
                target="_blank"
                className="link-to font-bold text-black"
              >
                Donat Guilbert
              </Link>
              , un professionnel passionné, et se déroulent à la Maison des
              Associations Simone Veil à St Cyr L'école.
              <ul id="hours-list">
                <li>
                  <span className="font-bold">Mercredi :</span>
                  <ul>
                    <li className="list-item">• 7/8 ans : de 14h à 15h</li>
                    <li className="list-item">• 9/11 ans : de 15h à 16h</li>
                    <li className="list-item">
                      • 12 ans et plus : de 16h à 17h
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Jeudi :</span>
                </li>
                <li className="list-item">• Adultes : de 19h à 20h30</li>
              </ul>
            </Paragraph>
          </div>
        }
        childrenThree={
          <div id="square-container">
            <div class="square">
              <div class="square-content">
                <img
                  src={Donat}
                  className="donat"
                  loading="lazy"
                  alt="Donat Guilbert"
                />
              </div>
            </div>
            <div class="square">
              <div class="square-content">
                <img
                  src={MAS}
                  className="mas"
                  loading="lazy"
                  alt="Maison des Associations Simone Veil"
                />
              </div>
            </div>
          </div>
        }
      />
      <Section
        children={""}
        childrenTwo={
          <>
            <CardPrice />
          </>
        }
        childrenThree={
          <>
            <H3>
              Vous souhaitez vous{" "}
              <span className="text-blue font-bold">inscrire ?</span>
            </H3>
            <Paragraph>
              <a
                href={BulletinAdulte}
                download={"Bulletin d'adhésion adultes 2025-2026.docx"}
                className="link-cours font-bold"
              >
                Télécharger le bulletin d'adhésion ADULTE en cliquant ici
              </a>{" "}
              OU{" "}
              <a
                href={BulletinEnfants}
                download={"Bulletin d'adhésion 2025-2026.docx"}
                className="link-cours font-bold"
              >
                Télécharger le bulletin d'adhésion ENFANT en cliquant ici{" "}
              </a>
              remplissez-le et envoyez-le à l'adresse suivante :{" "}
              <a
                href="mailto:ladivinecomedie78@gmail.com"
                className="link-cours font-bold"
              >
                ladivinecomedie78@gmail.com
              </a>
            </Paragraph>
            <div id="download-container"></div>
          </>
        }
      />
    </main>
  );
};

export default Lesson;
