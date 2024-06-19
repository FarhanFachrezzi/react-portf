/* eslint-disable no-unused-vars */
import "./portfolio.scss";
import React from "react";
import pc from "../../../public/portfolio/pc.jpg";
import keyboard from "../../../public/portfolio/keyboard.jpg";
import cyberpunk from "../../../public/portfolio/cyberpunk.jpg";
import gitar from "../../../public/portfolio/gitar.jpg";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "japan culture website",
    image: pc,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis sequi dolorum, vero culpa autem dolor ullam! Quaerat neque similique incidunt. Earum eius incidunt est dolores quos explicabo ipsa officiis?",
  },
  {
    id: 2,
    title: "keyboard mechanical shop",
    image: keyboard,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis sequi dolorum, vero culpa autem dolor ullam! Quaerat neque similique incidunt. Earum eius incidunt est dolores quos explicabo ipsa officiis?",
  },
  {
    id: 3,
    title: "Cyberpunk Theme",
    image: cyberpunk,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis sequi dolorum, vero culpa autem dolor ullam! Quaerat neque similique incidunt. Earum eius incidunt est dolores quos explicabo ipsa officiis?",
  },
  {
    id: 4,
    title: "Guitar Shop",
    image: gitar,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis sequi dolorum, vero culpa autem dolor ullam! Quaerat neque similique incidunt. Earum eius incidunt est dolores quos explicabo ipsa officiis?",
  },
];

const Section = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="portfolio-image-container" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="text-container-p" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  // const scaleX = useTransform(scrollYProgress, [1, 0], ["100%", "0%"]);
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => {
        return <Section key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Portfolio;
