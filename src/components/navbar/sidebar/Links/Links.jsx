/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transtion: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const listLinks = ["HomePage", "Service", "Portfolio", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {listLinks.map((l) => {
        return (
          <motion.a
            href={`#${l}`}
            key={l}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {l}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
