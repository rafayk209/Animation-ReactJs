import React from 'react'
import Searching from '../searching.json'
import Lottie from "lottie-react";


const LottieFiles = () => {
  return (
    <div style={{width:200}}>
         <Lottie animationData={Searching} loop={true} />
    </div>
  )
}

export default LottieFiles