/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import "./navbar.scss";
import fbImg from "../../../public/facebook.png";
import igImg from "../../../public/instagram.png";
import dribbleImg from "../../../public/dribbble.png";
import ytImg from "../../../public/youtube.png";

import Sidebar from "./sidebar/SideBar";
const Navbar = () => {
  const variants = {};
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          FarhanFachrezzi
        </motion.span>
        <div className="social">
          <a href="">
            <img src={fbImg} />
          </a>
          <a href="">
            <img src={igImg} />
          </a>
          <a href="">
            <img src={dribbleImg} />
          </a>
          <a href="">
            <img src={ytImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
