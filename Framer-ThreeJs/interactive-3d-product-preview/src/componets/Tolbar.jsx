import React from "react";
import { motion } from "framer-motion";

const Toolbar = () => {
  const buttonVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="absolute bottom-10 flex gap-4">
      <motion.button
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Rotate
      </motion.button>
      <motion.button
        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Zoom
      </motion.button>
    </div>
  );
};

export default Toolbar;
