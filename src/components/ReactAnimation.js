import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
} from "framer-motion";
import logo from "./../logo.svg";

const ReactAnimation = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(1);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="App"
      >
        <header className="App-header">
          <motion.div whileTap={{ scale: 0.9 }} drag="x"    dragConstraints={{ left: -50, right: 50 }} style={{ x, opacity }}>
            <img src={logo} className="App-logo" alt="logo" />
          </motion.div>

          <motion.p
            animate={{ x: value + "px", opacity: toggle }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Edit <code>src/App.js</code> and save to reload
          </motion.p>

          <input
            type="range"
            name="range"
            min="-100"
            max="100"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <motion.button
            onClick={() => setToggle((prevValue) => (prevValue ? 0 : 1))}
            className="toggle-button"
          >
            Toggle Fade
          </motion.button>
        </header>
      </motion.div>
    </div>
  );
};

export default ReactAnimation;
