/* eslint-disable no-unused-vars */
import React from "react";
import "./service.scss";
import Card from "./Card";
import { motion } from "framer-motion";

const Service = () => {
  const variants = {
    initial: {
      x: -100,
      y: 100,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="service"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-header" variants={variants}>
        <p>
          I focus for helping your branf Grow <br />
          and move forward
        </p>
        <div className="hr"></div>
      </motion.div>
      <motion.div className="text-container" variants={variants}>
        <div className="text-1">
          <img src="/public/people.webp" alt="" width={1000} height={200} />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="text-2">
          <h1>
            <b>For Your</b> Bussines.
          </h1>
          <div className="text-card">What We do?</div>
        </div>
      </motion.div>
      <motion.div className="card-container" variants={variants}>
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </motion.div>
  );
};

export default Service;
