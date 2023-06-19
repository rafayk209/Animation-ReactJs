import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hand from "../monkeyhand.webp"

const ImageAnimation = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImages = () => {
    setIsImage1Visible(!isImage1Visible);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const [password, setPassword] = useState('');
  const [isEyesClosed, setIsEyesClosed] = useState(false);

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    if (passwordValue.length > 0) {
      setIsEyesClosed(true);
    } else {
      setIsEyesClosed(false);
    }
  };

  return (
    <div>


      <motion.div
        className="image-container"
        onClick={toggleImages}
      >
        <motion.img
          className="image"
          src={ 'https://miro.medium.com/v2/resize:fit:382/1*T6Z4ywtZbyJ-8PNT6MOzyA.gif' }
          alt="Animated Image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        />
        
      </motion.div>
      <motion.img
      
          className="image"
          animate={{y:isEyesClosed?-150:0}}
          src={ Hand}
          alt="Animated Image"
          // variants={imageVariants}
          // initial="hidden"
          // animate="visible"
          transition={{ duration: 0.5 }}
        />
        <br></br>
          <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default ImageAnimation;