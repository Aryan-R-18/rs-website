import React from 'react'
import Lottie from 'lottie-react'
import loader from '../assets/robo-loader.json'
import '../styles/global.css'

const Loader = () => {
  return (
    <div className="loading-overlay">
      <Lottie
        animationData={loader}
        loop
        autoplay
        style={{ height: 150, width: 150 }}
      />
    </div>
  )
}

export default Loader
