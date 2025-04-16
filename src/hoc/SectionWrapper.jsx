import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start hidden, lower & slightly smaller
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // Fade in, move up & scale normally
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.25 }} // Triggers when 25% of the section is in view
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Invisible span for navigation targeting */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
