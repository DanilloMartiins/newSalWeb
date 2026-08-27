import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import MapaSal from '../components/MapaSal'
import './Contato.css'

export default function Contato() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(t('contato.alerta'))
  }

  return (
    <div className="contato-page page-with-padding">
      <PageHero 
        image="/assets/imagem-home-destaque-2-c-cav_.webp"
        label={t('contato.heroLabel')}
        title={t('contato.heroTitle')}
        subtitle={t('contato.heroSub')}
      />

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>{t('contato.infoTitulo')}</h2>
              
              <div className="info-block">
                <h3>Shopping Cidade Jardim</h3>
                <p>Av. Magalhães de Castro, 12.000</p>
                <p>Morumbi, São Paulo - SP</p>
                <p className="info-highlight">(11) 3198-9505</p>
              </div>

              <div className="info-block">
                <h3>Bela Cintra - Jardins</h3>
                <p>R. Bela Cintra, 1958</p>
                <p>Jardins, São Paulo - SP</p>
                <p className="info-highlight">(11) 3554-4460</p>
              </div>

              <div className="info-block">
                <h3>{t('contato.horarios')}</h3>
                <p><strong>Cidade Jardim:</strong></p>
                <p>Seg - Dom: 12h às 23h</p>
                <br />
                <p><strong>Bela Cintra:</strong></p>
                <p>Seg - Qui: 12h às 23h</p>
                <p>Sex - Sáb: 12h às 23h</p>
                <p>Dom: 12h às 22h</p>
              </div>

              <div className="social-links">
                <h3>{t('contato.redes')}</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/salgastronomia/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/salgastronomia" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2>{t('contato.enviarTitulo')}</h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('contato.nome')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contato.nomePlaceholder')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contato.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contato.assunto')}</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('contato.selecione')}</option>
                    <option value="reserva">{t('contato.assuntoReserva')}</option>
                    <option value="evento">{t('contato.assuntoEvento')}</option>
                    <option value="feedback">{t('contato.assuntoFeedback')}</option>
                    <option value="outro">{t('contato.assuntoOutro')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contato.mensagem')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder={t('contato.mensagemPlaceholder')}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  {t('contato.enviarBtn')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <MapaSal />
        </div>
      </section>
    </div>
  )
}