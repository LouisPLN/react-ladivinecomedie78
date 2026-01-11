import React from "react";
import "../../styles/components/CardSocial.css";
import * as motion from "motion/react-client";

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

const CardSocial = ({ additionalClasses, children }) => {
  return (
    <motion.div
      id="social-card"
      variants={OpacityInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className={`social-card-container ${additionalClasses}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default CardSocial;
