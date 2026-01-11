import * as motion from "motion/react-client"
import "../styles/components/Section.css";

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

const Section = ({ children, childrenTwo, childrenThree }) => {
  return (
    <motion.section className="section-skeleton"
    variants={OpacityInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}>
      <div className="section-title">{children}</div>
      <div className="section-content">
        <div className="section-left">{childrenTwo}</div>
        <div className="section-right">{childrenThree}</div>
      </div>
    </motion.section>
  );
};

export default Section;
