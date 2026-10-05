import { Head } from 'vite-react-ssg'
import SEOHead from '../components/SEOHead'
import { SITE_URL, SEO_PADRAO } from '../seo.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Home.css'

const heroImages = [
  '/assets/hero-1.webp',
  '/assets/hero-2.webp',
  '/assets/hero-3.webp',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const { t } = useTranslation()
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

  // dados pro Google (enderecos reais da pagina Contato)
  const restaurante = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Sal Gastronomia',
    servesCuisine: ['Brasileira', 'Contemporanea'],
    telephone: '(11) 3198-9505',
    url: SITE_URL,
    image: SITE_URL + '/og.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Magalhaes de Castro, 12000',
      addressLocality: 'Sao Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.instagram.com/salgastronomia/',
      'https://www.facebook.com/salgastronomia',
    ],
  }

  return (
    <div className="home">
      <SEOHead title={SEO_PADRAO.titulo} description={SEO_PADRAO.descricao} path="/" />
      <Head>
        <script type="application/ld+json">{JSON.stringify(restaurante)}</script>
      </Head>
      {/* Hero Gallery */}
      <section className="hero">
        <h1 className="sr-only">Sal Gastronomia</h1>
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
                src="/assets/ambiente-1.webp" 
                alt="Ambiente Sal Gastronomia"
                loading="lazy" 
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
              <p className="section-label">{t('home.sobreLabel')}</p>
              <h2 className="section-title">{t('home.sobreTitulo')}</h2>
              <p className="about-text">
                {t('home.sobreTexto1')}
              </p>
              <p className="about-text">
                {t('home.sobreTexto2')}
              </p>
              <Link to="/sobre" className="btn btn-outline-dark">
                {t('home.sobreCta')}
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
            <p className="section-label">{t('home.cardapioLabel')}</p>
            <h2 className="section-title">{t('home.cardapioTitulo')}</h2>
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
                <img src="/assets/aligot.webp" alt="Aligot" loading="lazy" />
              </div>
              <div className="featured-info">
                <h3>Aligot</h3>
                <p>{t('home.aligotDesc')}</p>
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
                <img src="/assets/tagliatelli-300x300.webp" alt="Tagliatelle" loading="lazy" />
              </div>
              <div className="featured-info">
                <h3>Tagliatelle</h3>
                <p>{t('home.tagliatelleDesc')}</p>
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
                <img src="/assets/polenta-cremosa-com-linguica-300x300.webp" alt="Polenta Cremosa" loading="lazy" />
              </div>
              <div className="featured-info">
                <h3>Polenta Cremosa</h3>
                <p>{t('home.polentaDesc')}</p>
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
              {t('home.verCardapio')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation-cta">
        <div className="reservation-cta-bg">
          <img 
            src="/assets/parallax.webp" 
            alt="Sal Gastronomia"
            loading="lazy" 
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
          <p className="section-label" style={{color: 'rgba(255,255,255,0.6)'}}>{t('home.reservasLabel')}</p>
          <h2>{t('home.reservasTitulo')}</h2>
          <p>{t('home.reservasSub')}</p>
          <a 
            href="https://reservation.getin.app/VknaxK6O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {t('home.reservarMesa')}
          </a>
        </motion.div>
      </section>
    </div>
  )
}