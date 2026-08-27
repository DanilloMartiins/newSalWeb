import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import './Reservas.css'

export default function Reservas() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    location: 'cidade-jardim',
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
    alert('Reserva solicitada com sucesso! Entraremos em contato para confirmação.')
  }

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ]

  return (
    <div className="reservas-page page-with-padding">
      <PageHero 
        image="/assets/hero-3.webp"
        label={t('reservas.heroLabel')}
        title={t('reservas.heroTitle')}
        subtitle={t('reservas.heroSub')}
      />

      {/* Reservation Form */}
      <section className="reservas-form-section section">
        <div className="container">
          <div className="reservas-grid">
            <motion.div 
              className="reservas-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>{t('reservas.infoTitulo')}</h2>
              
              <div className="info-card">
                <h3>{t('reservas.cidadeJardim')}</h3>
                <p>Av. Magalhães de Castro, 12.000</p>
                <p>Morumbi, São Paulo - SP</p>
                <p className="info-phone">(11) 3198-9505</p>
                <p className="info-hours">
                  {t('reservas.segDom')}
                </p>
              </div>

              <div className="info-card">
                <h3>{t('reservas.belaCintra')}</h3>
                <p>R. Bela Cintra, 1958</p>
                <p>Jardins, São Paulo - SP</p>
                <p className="info-phone">(11) 3554-4460</p>
                <p className="info-hours">
                  {t('reservas.segQui')}<br />
                  {t('reservas.sexSab')}<br />
                  {t('reservas.dom')}
                </p>
              </div>

              <div className="info-note">
                <p>{t('reservas.grupoNota')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="reservas-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="reservas-real-cta">
                <p>{t('reservas.reservaOficial')}</p>
                <a 
                  href="https://reservation.getin.app/VknaxK6O" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-full"
                >
                  {t('reservas.reservaOficialBtn')}
                </a>
              </div>

              <div className="reservas-divider">
                <span>{t('reservas.ouForm')}</span>
              </div>
              <form onSubmit={handleSubmit} className="reservas-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('reservas.nome')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('reservas.email')}</label>
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{t('reservas.telefone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">{t('reservas.pessoas')}</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? t('reservas.pessoa') : t('reservas.pessoasPlural')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">{t('reservas.data')}</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">{t('reservas.horario')}</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t('reservas.selecione')}</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="location">{t('reservas.unidade')}</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="cidade-jardim">{t('reservas.cidadeJardim')}</option>
                    <option value="bela-cintra">{t('reservas.belaCintra')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('reservas.obs')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder={t('reservas.obsPlaceholder')}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  {t('reservas.confirmar')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}