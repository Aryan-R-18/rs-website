import React from 'react'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import notFoundAnimation from '../assets/404NotFound.json'
import '../styles/global.css'

const NotFound = () => {
  const navigate = useNavigate()

  const handleBackHome = () => {
    navigate('/') 
  }

  return (
    <div className="notfound-container">
      <Lottie
        animationData={notFoundAnimation}
        loop
        autoplay
        className="notfound-animation"
      />
      <h2 className="notfound-text">Oops! Page Not Found</h2>
      <button onClick={handleBackHome}>Back to Home</button>
    </div>
  )
}

export default NotFound
