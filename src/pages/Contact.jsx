import React from "react";
import "../styles/pages/Contact.css";

import Information from "../components/Information";
import H2 from "../components/Divers/H2";
import Subtitle from "../components/Divers/Subtitle";
import FormContact from "../components/Forms/FormContact";
import IconPhone from "../assets/images/icon-phone.svg";
import IconMail from "../assets/images/icon-mail.svg";
import IconLoc from "../assets/images/icon-loc.svg";

import * as motion from "motion/react-client"

const FadeInAnimationVariants = {
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

const Contact = () => {
  return (
    <main className="page-container">
      <H2>Nous contacter</H2>
      <Subtitle>
        Vous pouvez nous contacter via le formulaire ci-dessous pour tout type
        de demande : renseignements sur nos représentations, inscriptions à nos
        cours, partenariats, ou toute autre question. Nous serons ravis de vous
        répondre dans les plus brefs délais.
      </Subtitle>
      <div id="spacer">
        <FormContact />
        <motion.div
          className="contact-infos"
          variants={FadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <a href="tel:0667716441">
            <img src={IconPhone} alt="icon" />
            06.67.71.64.41
          </a>
          <a href="mailto:ladivinecomedie78@gmail.com">
            <img src={IconMail} alt="icon" />
            ladivinecomedie78@gmail.com
          </a>
          <p>
            <img src={IconLoc} alt="icon" />
            39 Avenue du Centre, 78650 Beynes, France
          </p>
        </motion.div>
      </div>
      <div id="IframeShape">
        <iframe
          className="iframe-contact"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=fr&amp;q=39%20Avenue%20du%20Centre,%2078650%20Beynes,%20France+(La%20divine%20com%C3%A9die)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
      {/* <Information /> */}
    </main>
  );
};

export default Contact;
