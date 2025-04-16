import React from "react";
import { Tilt } from "react-tilt";  // ✅ Correct import

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
  <Tilt className='w-full max-w-[250px] mx-auto'>
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: index * 0.3, type: "spring" },
          },
        }}
        className='w-full p-[2px] rounded-[20px] bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 shadow-[0_0_20px_rgba(100,100,255,0.3)]'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-[#0f0f1a] rounded-[20px] py-5 px-12 min-h-[220px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
          >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Career Objective</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
         &nbsp;&nbsp;A B.Tech IT graduate with a strong interest in Machine Learning,
        Artificial Intelligence, and Full-Stack Development. 
        Skilled in building ML models and full-stack web applications, 
        with a passion for solving real-world problems through technology. 
        Eager to contribute, learn continuously, and grow in dynamic, innovation-driven environments!
      </motion.p>

      <div className='mt-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center'>
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
