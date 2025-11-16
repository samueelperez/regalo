import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Countdown from './components/Countdown'
import Particles from './components/Particles'
import RevealMessage from './components/RevealMessage'
import './App.css'

function App() {
  // CONFIGURA AQUÍ LA FECHA Y HORA DE ENTREGA DEL REGALO
  // Formato: 'YYYY-MM-DD HH:mm:ss'
  const targetDate = new Date('2025-12-31 00:00:00')

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [isRevealed, setIsRevealed] = useState(false)

  function calculateTimeLeft() {
    const difference = targetDate - new Date()

    if (difference <= 0) {
      return null
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      if (!newTimeLeft) {
        setIsRevealed(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <Particles />

      <div className="container">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="countdown-container"
            >
              <motion.h1
                className="title"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Un Regalo Especial
              </motion.h1>

              <motion.p
                className="subtitle"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                Para la persona más importante
              </motion.p>

              {timeLeft && <Countdown timeLeft={timeLeft} />}

              <motion.p
                className="message"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              >
                Se que esta fecha es especial para ti y estare a tu lado para celebrarla.
                <br /><br />
                <span className="message-highlight">Con todo mi amor</span>
              </motion.p>

              <motion.div
                className="decoration"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              >
                <div className="decoration-line"></div>
                <motion.div
                  className="decoration-symbol"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ❄
                </motion.div>
                <div className="decoration-line"></div>
              </motion.div>
            </motion.div>
          ) : (
            <RevealMessage key="reveal" />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
