import { motion } from 'framer-motion'
import './RevealMessage.css'

const RevealMessage = () => {
  return (
    <motion.div
      className="reveal"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h2
        className="reveal-title"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ¡Es el momento!
      </motion.h2>

      <motion.p
        className="reveal-message"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Ha llegado el momento de entregarte tu regalo de Navidad.
        <br />
        Espero que te encante tanto como yo disfruté eligiéndolo para ti.
      </motion.p>

      <motion.div
        className="reveal-heart"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        ❤️
      </motion.div>
    </motion.div>
  )
}

export default RevealMessage
