import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { REPRESENTATIONS } from "../../Data";
import * as motion from "motion/react-client";
import MiniLink from "./MiniLink";
import H3 from "./H3";

import IconProg from "../../assets/images/icon-prog.svg";
import IconPin from "../../assets/images/icon-pin.svg";
import IconEvent from "../../assets/images/icon-event.svg";

const FadeInLeftAnimationVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const FadeInRightAnimationVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const CarouselSoon = () => {
  return (
    <Carousel autoPlay={true} showArrows={false} infiniteLoop={true}>
      {REPRESENTATIONS.map((event, index) => (
        <div key={index} className="section-topbanner2">
          <motion.div
            className="leftSide2"
            variants={FadeInLeftAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <H3>“{event.piecePlayed}”</H3>
            <div className="content-minilink">
              <MiniLink
                source={IconPin}
                children={"Lieu de la représentation"}
                childrenTwo={event.location}
              />
            </div>
            <div className="content-minilink">
              <MiniLink
                source={IconProg}
                children={"Date de la représentation"}
                childrenTwo={event.date}
              />
            </div>
            <div className="content-minilink">
              <MiniLink
                source={IconEvent}
                children={"Nom de l'évènement"}
                childrenTwo={event.eventName}
              />
            </div>
          </motion.div>
          <motion.img
            className="rightSide2"
            src={event.image}
            loading="lazy"
            alt="Vu d'une scène de théâtre"
            variants={FadeInRightAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSoon;
