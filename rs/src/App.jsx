import React, { use, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/global.css'
import Loader from './components/loader'
import NotFound from './pages/NotFound'

const AppContent = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [firstLoading, setFirstLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [speed, setSpeed] = useState(1000)

  const routeLocation = location.pathname

  const isNotFound =
    routeLocation !== '/' &&
    routeLocation !== '/team' &&
    routeLocation !== '/about' &&
    routeLocation !== '/contact'
  useEffect(() => {
    setIsLoading(true)
    setFadeOut(false)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, speed - 100)

    const hideTimer = setTimeout(() => {
      setIsLoading(false)

      setFirstLoading(false)
      setSpeed(400)
    }, speed)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [location.pathname])

  return (
    <>
      {isLoading && (
        <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
          <Loader />
        </div>
      )}

      {!firstLoading && !isNotFound && <Navbar />}

      <div
        className={`page-content ${isLoading ? 'page-hidden' : 'page-animate'}`}
      >
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {!isNotFound && <Footer />}
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
