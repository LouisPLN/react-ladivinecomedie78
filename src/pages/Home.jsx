import React from "react";
import "../styles/pages/Home.css";

import Team from "../assets/images/team.png";
import Circles from "../assets/images/circles.svg";
// import Affiche from "../assets/images/dinerdefamille.JPG";
import Affiche from "../assets/images/a-la-une.jpg";
import DDF from "../assets/images/dinerdefamille.JPG";
import CoursAdultes from "../assets/images/IMG_3325.jpg";
import IconProg from "../assets/images/icon-prog.svg";
import IconSave from "../assets/images/icon-save.svg";
import LogoFB from "../assets/images/logo-fb.svg";
import LogoYT from "../assets/images/logo-yt.svg";
import BgText from "../assets/images/bg-textures.svg";
import LAPER from "../assets/images/laperruche.png";
import OUI from "../assets/images/oui!_31_01_25_page-0001.jpg";

import HeadBanner from "../components/HeadBanner";
import Information from "../components/Information";
import Section from "../components/Section";
import H2 from "../components/Divers/H2";
import H3 from "../components/Divers/H3";
import Subtitle from "../components/Divers/Subtitle";
import Paragraph from "../components/Divers/Paragraph";
import Linker from "../components/Buttons/Linker";
import Banner from "../components/Banner";
import Review from "../components/Review";
import MiniLink from "../components/Divers/MiniLink";
import CardSocial from "../components/Divers/CardSocial";
import CTA from "../components/Buttons/CTA";
import CarouselFest from "../components/Divers/CarouselFest";

const Home = () => {
  return (
    <>
      <HeadBanner />
      <Information />
      <div className="aya-container">
        <H2>MERCI !</H2>
        <Subtitle>
          Après <strong>dix années de rires</strong>, de partage et de
          convivialité, <strong>le festival Mort de Rire</strong>, porté par{" "}
          <strong>la Divine Comédie</strong>, tire aujourd’hui sa révérence.
          <br></br>
          Nous avons été profondément heureux de vous accueillir tout au long de
          ces belles années sur les planches du TGP, et de vivre avec vous{" "}
          <strong>tant de moments de théâtre, d’émotion et de joie.</strong>
          <br></br>
          Nous espérons que nos chemins se croiseront à nouveau, ici ou
          ailleurs, pour d’autres aventures artistiques.
          <br></br>
          Un <strong>immense merci</strong> à notre public fidèle et une belle
          continuation à toutes les troupes qui ont fait vivre le festival au
          fil des éditions.
          <br></br>
          <strong>Vive le théâtre, et à très bientôt.</strong>
        </Subtitle>
        {/* <CarouselFest /> */}
      </div>
      <Section
        children={
          <>
            <H2>À propos de nous</H2>
            <Subtitle></Subtitle>
          </>
        }
        childrenTwo={
          <>
            <Paragraph>
              L'association a été fondée en 2015 par sa présidente, Ophélie
              Muret. Rapidement rejointe par le comédien professionnel Donat
              Guibert, elle offre des cours pour enfants, adolescents et adultes
              à Saint-Cyr-l'École (Yvelines).
            </Paragraph>
            <br></br>
            <Paragraph>
              Chaque année, l'association organise un festival de Théâtre
              Amateur, accueillant des troupes de différentes régions, et une
              troupe en particulier se distingue en parcourant la France pour
              partager la joie du rire à travers la comédie lors de divers
              festivals et événements.
            </Paragraph>
            <Linker to="/a-propos-de-nous">
              En savoir plus à propos de nous
            </Linker>
          </>
        }
        childrenThree={
          <>
            <img
              className="About-Image"
              src={Team}
              loading="lazy"
              alt="L'équipe La Divine Comédie"
            />
            <img className="Circles" src={Circles} loading="lazy" alt="" />
          </>
        }
      />
      <Section
        children={
          <>
            <H2>Vous partager notre passion</H2>
            <Subtitle>
              Découvrez notre passion à travers des cours animés par le
              talentueux Donat Guibert et des représentations scéniques à
              travers la France.
            </Subtitle>
          </>
        }
        childrenTwo={
          <>
            <img
              className="Comedy-Image"
              src={OUI}
              loading="lazy"
              alt="Vu d'une scène de théatre"
            />
          </>
        }
        childrenThree={
          <>
            <H3>
              “Oui !” une pièce de{" "}
              <span className="text-blue font-bold">Pascal Rocher</span>
            </H3>
            <Paragraph>
              Synopsis : Après 8 ans de vie commune, Valérie et Stéphane font
              appel à une wedding planner pour organiser leur mariage car ils
              ont enfin décidé de se dire Oui ! Les dialogues modernes et
              irrésistibles font mouche, les bons mots fusent, les répliques
              sont tracées au cordeau, l’énergie contagieuse.
              {/* Synopsis : Un couple attend des amis pour dîner, mais ceux-ci ne
              viendront jamais. Ce contretemps anodin déclenche un affrontement
              aussi drôle que mordant. Entre confidences piquantes, révélations
              intimes et quiproquos absurdes, la soirée tourne au duel explosif.
              Chacun accepte de se dire toute la vérité alors qu’aucun n’est
              prêt à l’entendre. Une comédie grinçante et intelligente qui
              explore, avec sensibilité et humour, les tourments éternels du
              couple et de l’amour. */}
              {/* Synopsis : A l'occasion de ses 30 ans, Alexandre souhaite demander
              à ses parents d'être les témoins de son mariage.<br></br>
              Son père, animateur de télé parisien, et sa mère, femme au foyer
              provinciale, sont fâchés depuis sa naissance.<br></br>
              Alexandre va utiliser de faux prétextes pour les réunir...
              <br></br>
              Le dîner de famille va-t-il totalement partir en vrille ? */}
              {/* Synopsis : Paul fait croire à Sophie que son meilleur ami Martin,
              venant de perdre sa mère, va venir s’installer quelque temps chez
              eux. Il veut en réalité la quitter, pensant que ce ménage à trois
              fera exploser leur couple… Martin, pris au piège, accepte. Mais ce
              sera « une semaine… pas plus ! ». Démarre alors un ménage à trois
              totalement explosif, « véritables » chaises musicales avec son lot
              de mensonges, de coups bas et autres plaisirs quotidiens. */}
            </Paragraph>
            <div className="section-minilink">
              <div className="content-minilink">
                <MiniLink
                  source={IconProg}
                  children={"La programmation"}
                  childrenTwo={"Trouvez nous peut être pas loin de chez vous."}
                />
                <Linker to="/nos-REPRESENTATIONS">Voir la programmation</Linker>
              </div>
              <div className="content-minilink">
                <MiniLink
                  source={IconSave}
                  children={"Réservation en ligne"}
                  childrenTwo={
                    // "Réservez votre place en ligne en cliquant sur le bouton."
                    // "Billetterie et réservations : 02 35 74 05 32"
                    "Billetterie sur place."
                  }
                />
                <div>
                  {/* <Linker
                    to="https://www.billetweb.fr/festival-mort-de-rire-2025"
                    target={"_blank"}
                  >
                    Réserver votre place
                  </Linker> */}
                </div>
              </div>
            </div>
          </>
        }
      />
      <Section
        children={""}
        childrenTwo={
          <>
            <H3>
              De l'école à la <span className="text-blue font-bold">scène</span>
            </H3>
            <Paragraph>
              Les cours de théâtre sont retransmis aux Tréteaux de Saint-Cyr,
              présidés par <span className="font-bold">Martine Calabro</span>. 
              <br></br>
              Pour plus d’informations, vous
              pouvez les contacter à l’adresse suivante :
              <span className="text-blue font-bold"> treteauxdesaintcyr@gmail.com.</span>
            </Paragraph>
          </>
        }
        childrenThree={
          <>
            <img
              className="cours-adultes"
              src={CoursAdultes}
              loading="lazy"
              alt="Cours adultes"
            />
          </>
        }
      />
      <Banner />
      <Review />
      <CardSocial
        additionalClasses="facebook"
        children={
          <div className="social-card-content">
            <img src={LogoFB} className="logo-fb" alt="Facebook" />
            <img src={BgText} className="bg-text" alt="" />
            <H3>
              <span className="text-white text-center font-bold">
                Suivez nous sur Facebook !
              </span>
            </H3>
            <div style={{ marginBottom: "30px" }}></div>
            <CTA
              to="https://www.facebook.com/La-Divine-Comédie-1789844364578891"
              target={"_blank"}
            >
              Voir notre page
            </CTA>
          </div>
        }
      />
      <CardSocial
        additionalClasses="youtube"
        children={
          <div className="social-card-content">
            <img src={LogoYT} className="logo-yt" alt="youutbe" />
            <img src={BgText} className="bg-text" alt="" />
            <H3>
              <span className="text-white text-center font-bold">
                Suivez nous sur Youtube !
              </span>
            </H3>
            <div style={{ marginBottom: "30px" }}></div>
            <CTA
              to="https://www.youtube.com/channel/UCnQAhjkJ9UqOZgG9iJPprfg"
              target={"_blank"}
            >
              Voir notre chaine
            </CTA>
          </div>
        }
      />
    </>
  );
};

export default Home;
