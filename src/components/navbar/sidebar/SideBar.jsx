/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./sidebar.scss";
import Links from "./Links/Links";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton.jsx/ToggleButton";
const variants = {
  open: {
    clipPath: "circle(1110px at 50px 50px)",
    transition: {
      stiffness: 50,
      type: "spring",
    },
  },

  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      dumping: 30,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    //note  jika animate == open maka variants akan memlilih properti open
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>

      <ToggleButton setOpen={setOpen} isOpen={open} />
    </motion.div>
  );
};

export default Sidebar;
