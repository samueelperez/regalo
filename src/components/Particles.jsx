import { motion } from 'framer-motion'
import { useMemo } from 'react'
import './Particles.css'

const Particles = () => {
  const particles = useMemo(() => {
    // Reduce partículas en móvil para mejor rendimiento
    const isMobile = window.innerWidth <= 768
    const particleCount = isMobile ? 25 : 50

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 10,
      drift: (Math.random() - 0.5) * 200
    }))
  }, [])

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`
          }}
          initial={{
            y: '100vh',
            x: 0,
            scale: 0,
            opacity: 0
          }}
          animate={{
            y: '-100px',
            x: particle.drift,
            scale: 1,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: particle.duration
            }
          }}
        />
      ))}
    </div>
  )
}

export default Particles
