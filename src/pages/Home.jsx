import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const featuredDishes = [
  {
    name: 'Aligot',
    description: 'Lombo de Cordeiro com purê de dois queijos, cogumelos e molho de jabuticaba',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    category: 'Prato Principal'
  },
  {
    name: 'Steak Tartare',
    description: 'Mignon com ovo de codorna frito e batata chips',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    category: 'Entrada'
  },
  {
    name: 'Polenta Cremosa',
    description: 'Com linguiça, requeijão e molho de tomate artesanal',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    category: 'Entrada'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" 
            alt="Sal Gastronomia" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="hero-tagline">Desde 2005</p>
          <h1 className="hero-title">
            <span className="title-line">SAL</span>
            <span className="title-accent">Gastronomia</span>
          </h1>
          <p className="hero-subtitle">
            Uma experiência gastronômica onde o tempero acentuado 
            e a qualidade dos ingredientes se encontram
          </p>
          <div className="hero-buttons">
            <a 
              href="https://reservation.getin.app/VknaxK6O" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Reservar Mesa
            </a>
            <Link to="/cardapio" className="btn btn-outline">
              Ver Cardápio
            </Link>
          </div>
        </motion.div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section">
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
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80" 
                alt="Ambiente Sal Gastronomia" 
              />
              <div className="about-image-accent"></div>
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
              <h2 className="section-title">Mais do que comida boa</h2>
              <p className="about-text">
                Aqui no SAL você viverá uma experiência gastronômica completa, 
                em um ambiente aconchegante, com uma equipe pronta para lhe atender.
              </p>
              <p className="about-text">
                Desde 2005, o restaurante Sal Gastronomia conquista paladares em São Paulo, 
                com a cozinha marcada pelo tempero acentuado e qualidade dos ingredientes.
              </p>
              <Link to="/sobre" className="btn btn-dark">
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
            <p className="section-label">Criações Exclusivas</p>
            <h2 className="section-title">Nossos Destaques</h2>
            <p className="section-subtitle">
              Pratos que marcaram nossa história e conquistaram o paladar de nossos clientes
            </p>
          </motion.div>

          <div className="featured-grid">
            {featuredDishes.map((dish, index) => (
              <motion.div 
                key={dish.name}
                className="featured-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="card-image">
                  <img src={dish.image} alt={dish.name} />
                  <span className="card-category">{dish.category}</span>
                </div>
                <div className="card-content">
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="featured-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/cardapio" className="btn btn-dark">
              Ver Cardápio Completo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations section">
        <div className="container">
          <motion.div 
            className="locations-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Nossas Unidades</p>
            <h2 className="section-title">Onde Estamos</h2>
          </motion.div>

          <div className="locations-grid">
            <motion.div 
              className="location-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="location-image">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" 
                  alt="Cidade Jardim" 
                />
              </div>
              <div className="location-info">
                <h3>Shopping Cidade Jardim</h3>
                <p>Av. Magalhães de Castro, 12.000</p>
                <p>Morumbi, São Paulo</p>
                <a 
                  href="https://reservation.getin.app/VknaxK6O" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Reservar
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="location-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="location-image">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80" 
                  alt="Bela Cintra" 
                />
              </div>
              <div className="location-info">
                <h3>Bela Cintra - Jardins</h3>
                <p>R. Bela Cintra, 1958</p>
                <p>Jardins, São Paulo</p>
                <a 
                  href="https://reservation.getin.app/VknaxK6O" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Reservar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="final-cta">
        <div className="final-cta-background">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80" 
            alt="Experiência Gastronômica" 
          />
          <div className="final-cta-overlay"></div>
        </div>
        <motion.div 
          className="final-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2>Viva uma Experiência Única</h2>
          <p>Reserve agora e descubra o melhor da cozinha brasileira contemporânea</p>
          <a 
            href="https://reservation.getin.app/VknaxK6O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Reservar Agora
          </a>
        </motion.div>
      </section>
    </div>
  )
}