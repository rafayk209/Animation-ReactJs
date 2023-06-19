import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


const TextAnimation = ({ text }) => {

//////////////////////////////////////TEXT ANIMATION////////////////////////////////    

return <div>

{/* //after typing take pause// */}

<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('<h1 style="color:white">Hi! <span style="color: #27ae60;">You may customize</span> me!</h1>')
    .pauseFor(3000)
    .start();
    

  }}
  options={{
 
    loop: true,
  }}
  
/>

{/* //basic use// */}

    <Typewriter
  options={{
    delay:50,
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>

    
    </div>; 



//YOU MAY ALSO USE THIS ANIMATION 



};

export default TextAnimation;





