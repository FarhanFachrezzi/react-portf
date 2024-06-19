import "./hero.scss";
import a from "../../../public/a.png";
import scrollIcon from "../../../public/scroll.png";
import { motion } from "framer-motion";
const Hero = () => {
  const variantstext = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 1.7,
        repeat: Infinity,
      },
    },
  };

  const slideTexts = {
    initial: {
      x: 10,
    },
    animate: {
      x: "-600%",
      transition: {
        duration: 20,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={variantstext}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={variantstext}>Farhan Fachrezzi</motion.h2>
          <motion.h1 variants={variantstext}>Web Developer & Weeb</motion.h1>
          <motion.div className="button" variants={variantstext}>
            <motion.button variants={variantstext}>
              See the Lates Works
            </motion.button>
            <a href="#Contact">
              <motion.button variants={variantstext}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            src={scrollIcon}
            alt=""
            variants={variantstext}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div className="text-animation" variants={variantstext}>
        <motion.h1 variants={slideTexts} initial="initial" animate="animate">
          Junior Web Developer & weeb
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Hero;
