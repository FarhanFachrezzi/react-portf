/* eslint-disable no-unused-vars */
import React from "react";
import "./parallax.scss";
import { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
const Parallax = ({ type }) => {
  const reff = useRef();

  const { scrollYProgress } = useScroll({
    target: reff,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div
      ref={reff}
      className="parallax"
      style={{
        background:
          type == "service"
            ? "linear-gradient(180deg, #111132 ,#0c0c1d)"
            : "linear-gradient(180deg,#0c0c1d ,#4f4f51)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type == "service" ? "What we do" : "What we did"}
      </motion.h1>
      <div className="mountains"></div>
      <motion.div
        className="planets"
        style={{
          y: yPlanets,
          backgroundImage: `url(${
            type === "service" ? "/public/planets.png" : "/public/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yPlanets }}></motion.div>
    </div>
  );
};
export default Parallax;
