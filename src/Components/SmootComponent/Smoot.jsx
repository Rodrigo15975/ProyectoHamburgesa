import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const SmoothComponent = ({ state }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={state.key}
        transition={{ duration: 0.5 }}
      >
        {state.component}
      </motion.div>
    </AnimatePresence>
  );
};

export default SmoothComponent;
