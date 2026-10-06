import { Head } from 'vite-react-ssg'
import SEOHead from '../components/SEOHead'
import { SITE_URL, SEO_PADRAO } from '../seo.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './Home.css'
import './Cardapio.css'

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
  const [zoom, setZoom] = useState(null)
  const [travado, setTravado] = useState(false)
  const [prato, setPrato] = useState(null)

  // teaser: foto + nome + desc curta, detalhe fica no cardapio
  const destaques = [
    { img: '/assets/cardapio/0421ee01317e.webp', titulo: 'Aligot', desc: t('home.aligotDesc'),
      alvo: { menu: 'principal', categoria: 'Carnes', chave: 'Lombo de Cordeiro com Aligot' } },
    { img: '/assets/cardapio/9baf31f2b0df.webp', titulo: 'Tagliatelle', desc: t('home.tagliatelleDesc'),
      alvo: { menu: 'principal', categoria: 'Massas e Risotos', chave: 'Tagliatelle com Pesto' } },
    { img: '/assets/cardapio/0ba24f661b23.webp', titulo: 'Polenta Cremosa', desc: t('home.polentaDesc'),
      alvo: { menu: 'principal', categoria: 'Entradas', chave: 'Polenta Cremosa' } },
  ]

  // mesma lupa do cardapio (clicou pra sair = nao volta sozinho)
  function moveLupa(e, i) {
    if (travado) return
    const r = e.currentTarget.getBoundingClientRect()
    setZoom({ i, x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
  }

  function clicaLupa(i) {
    if (zoom && zoom.i === i) {
      setZoom(null)
      setTravado(true)
    } else {
      setZoom({ i, x: 50, y: 50 })
      setTravado(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // modal: esc fecha + trava scroll + zera lupa
  useEffect(() => {
    setZoom(null)
    setTravado(false)
    if (prato === null) return
    document.body.style.overflow = 'hidden'
    function noEsc(e) {
      if (e.key === 'Escape') setPrato(null)
    }
    window.addEventListener('keydown', noEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', noEsc)
    }
  }, [prato])

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
            {destaques.map((d, i) => (
              <motion.div
                key={d.titulo}
                className="featured-item featured-clicavel"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                tabIndex={0}
                onClick={() => setPrato(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setPrato(i)
                }}
              >
                <div
                  className="featured-image"
                  onMouseMove={(e) => moveLupa(e, i)}
                  onMouseLeave={() => { setZoom(null); setTravado(false) }}
                  onClick={(e) => { e.stopPropagation(); clicaLupa(i) }}
                >
                  <img
                    src={d.img}
                    alt={d.titulo}
                    loading="lazy"
                    style={
                      zoom && zoom.i === i
                        ? { transform: 'scale(2)', transformOrigin: `${zoom.x}% ${zoom.y}%` }
                        : undefined
                    }
                  />
                </div>
                <div className="featured-info">
                  <h3>{d.titulo}</h3>
                  <p>{d.desc}</p>
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
            <Link to="/cardapio" className="btn btn-outline-dark">
              {t('home.verCardapio')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal do destaque: teaser + ver no cardapio */}
      {prato !== null && (
        <div className="modal-fundo" onClick={() => setPrato(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={destaques[prato].titulo}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-fechar" onClick={() => setPrato(null)} aria-label="Fechar">
              ✕
            </button>
            <div className="modal-foto modal-foto-fixa">
              <img src={destaques[prato].img} alt={destaques[prato].titulo} />
            </div>
            <div className="modal-info">
              <h2>{destaques[prato].titulo}</h2>
              <p>{destaques[prato].desc}</p>
              <Link
                to="/cardapio"
                state={{ prato: destaques[prato].alvo }}
                className="btn btn-primary"
              >
                {t('home.verCardapio')}
              </Link>
            </div>
          </div>
        </div>
      )}

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