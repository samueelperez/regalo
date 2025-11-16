import { motion } from 'framer-motion'
import './Countdown.css'

const Countdown = ({ timeLeft }) => {
  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' }
  ]

  return (
    <motion.div
      className="countdown"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
    >
      {timeUnits.map((unit, index) => (
        <TimeUnit
          key={unit.label}
          value={unit.value}
          label={unit.label}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  )
}

const TimeUnit = ({ value, label, delay }) => {
  const formattedValue = String(value).padStart(2, '0')

  return (
    <motion.div
      className="time-unit"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + delay }}
    >
      <motion.div
        className="time-value"
        key={formattedValue}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {formattedValue}
      </motion.div>
      <div className="time-label">{label}</div>
    </motion.div>
  )
}

export default Countdown
