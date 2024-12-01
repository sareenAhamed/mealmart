import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import Mobile from "./Mobile";

// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "./varients/Variant";

const Parent = () => {
  return (
    <>
      
      <motion.div
        variants={fadeIn("up", 0.1)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Home />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Menu />
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.3)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Mobile />
      </motion.div>
    </>
  );
};

export default Parent;
