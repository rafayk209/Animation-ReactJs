import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselAnimation = () => {
  const  items=[
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const variants = {
    enter: (direction) => {
      return {
        x: direction === 'next' ? '100%' : '-100%',
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction === 'next' ? '-100%' : '100%',
        opacity: 0,
      };
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          custom={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          src={items[currentIndex]}
        >
          {/* {items[currentIndex]} */}
        </motion.img>
      </AnimatePresence>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CarouselAnimation;
