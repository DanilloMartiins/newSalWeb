import { motion } from 'framer-motion'
import './PageHero.css'

export default function PageHero({ image, label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img src={image} alt={title} />
        <div className="page-hero-overlay"></div>
      </div>
      <motion.div 
        className="page-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {label && <p className="page-hero-label">{label}</p>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        <div className="page-hero-line"></div>
      </motion.div>
    </section>
  )
}