import React, { useState } from 'react'
import { motion,spring,useScroll } from 'framer-motion'
import image from './../logo.svg';
import { LoremIpsum } from './LoremIpsum';

const FramerAnimation = () => {
    const [move,setMove]=useState(false)
    const { scrollYProgress } = useScroll();

  return (
    <div >

{/* <motion.button
className="box2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  />
   <motion.div
        className="box2"

    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
  /> */}
{/* <motion.div
        className="box2"
      whileHover={{
        x: -200,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    //   whileTap={{
    //     x: 0,
    //     transition: { duration: 0.3, ease: 'easeOut' },
    //   }}
    >
    </motion.div> */}

{/* <motion.div
      className="box2"
      whileHover={{ scale: 1.2 }}
     animate={{x:move?200:-200}}
     
     transition={{type:"spring",bounce:2}}
     onClick={()=>{
        setMove(!move)
     }}
    /> */}


{/* <motion.div
      className="box2"
    
     animate={{rotate:[0,200,200,0],x:[200,0,200,0]}}
     transition={{repeat:Infinity,duration:10,}}
    /> */}


 {/* <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: [0, 2, 1] }}
      transition={{
        duration: 3,
        delay: 0.5,
        ease: [0, 0, 0, 1]
      }}
    /> */}
    
{/* 
    <motion.img
      key="image"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    
      transition={{ duration: 1 }}
      src={image}
      width={200}
    /> */}

{/*         
<motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        stiffness: 500,
        damping: 30,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
      onClick={() => console.log('Clicked')}
    >
      Framer Motion Example
    </motion.div> */}

    {/* ////scrole bar depend on website //// */}

    {/* <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      <LoremIpsum />
 */}



    </div>
  )
}

export default FramerAnimation