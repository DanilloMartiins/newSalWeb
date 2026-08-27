import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const heroImages = [
  '/assets/hero-1.jpg',
  '/assets/hero-2.jpg',
  '/assets/hero-3.jpg',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* Hero Gallery */}
      <section className="hero">
        <div className="hero-gallery">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={img} alt={`Sal Gastronomia ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/assets/ambiente-1.jpg" 
                alt="Ambiente Sal Gastronomia" 
              />
            </motion.div>
            
            <motion.div 
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="section-label">O Sal Gastronomia</p>
              <h2 className="section-title">Uma experiência gastronômica completa</h2>
              <p className="about-text">
                Desde 2005, o Sal Gastronomia conquista paladares em São Paulo. 
                A cozinha é marcada pelo tempero acentuado e qualidade dos ingredientes, 
                uma característica do Chef Henrique Fogaça.
              </p>
              <p className="about-text">
                Mais do que comida boa, aqui você viverá uma experiência gastronômica, 
                em um ambiente aconchegante, com uma equipe pronta para lhe atender.
              </p>
              <Link to="/sobre" className="btn btn-outline-dark">
                Conheça Nossa História
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured section">
        <div className="container">
          <motion.div 
            className="featured-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Cardápio</p>
            <h2 className="section-title">Criações Exclusivas</h2>
          </motion.div>

          <div className="featured-grid">
            <motion.div 
              className="featured-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="featured-image">
                <img src="/assets/aligot.jpg" alt="Aligot" />
              </div>
              <div className="featured-info">
                <h3>Aligot</h3>
                <p>Lombo de Cordeiro com purê de dois queijos, cogumelos e molho de jabuticaba</p>
              </div>
            </motion.div>

            <motion.div 
              className="featured-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="featured-image">
                <img src="/assets/lombo-de-cordeiro-pure-de-dois-queijos-funghi-e-molho-de-jabuticaba-1024x683.jpg" alt="Steak Tartare" />
              </div>
              <div className="featured-info">
                <h3>Steak Tartare</h3>
                <p>Mignon com ovo de codorna frito e batata chips</p>
              </div>
            </motion.div>

            <motion.div 
              className="featured-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="featured-image">
                <img src="/assets/polenta-cremosa-com-linguica-300x300.jpg" alt="Polenta Cremosa" />
              </div>
              <div className="featured-info">
                <h3>Polenta Cremosa</h3>
                <p>Com linguiça, requeijão e molho de tomate artesanal</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="featured-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/cardapio" className="btn btn-outline-dark">
              Ver Cardápio Completo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation-cta">
        <div className="reservation-cta-bg">
          <img 
            src="/assets/parallax.jpg" 
            alt="Sal Gastronomia" 
          />
          <div className="reservation-cta-overlay"></div>
        </div>
        <motion.div 
          className="reservation-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label" style={{color: 'rgba(255,255,255,0.6)'}}>Reservas</p>
          <h2>Reserve Sua Experiência</h2>
          <p>Garanta seu lugar e descubra sabores únicos</p>
          <a 
            href="https://reservation.getin.app/VknaxK6O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Reservar Mesa
          </a>
        </motion.div>
      </section>
    </div>
  )
}