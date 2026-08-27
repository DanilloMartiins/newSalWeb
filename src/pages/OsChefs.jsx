import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import './OsChefs.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function OsChefs() {
  const { t } = useTranslation()
  const [activeChef, setActiveChef] = useState('fogaca')

  const chefs = [
    {
      id: 'fogaca',
      name: 'Henrique Fogaça',
      role: t('chefs.fogacaRole'),
      image: '/assets/os-chefs/imagem-os-chefs-fogaca-1024x683.webp',
      bio: t('chefs.fogacaBio', { returnObjects: true }),
      social: {
        instagram: 'https://www.instagram.com/chefhenriquefogaca/'
      }
    },
    {
      id: 'douglas',
      name: 'Douglas Chavez',
      role: t('chefs.douglasRole'),
      image: '/assets/os-chefs/imagem-os-chefs-douglas-1024x683.webp',
      bio: t('chefs.douglasBio', { returnObjects: true }),
      social: {
        instagram: 'https://www.instagram.com/chefdouglaschavez/'
      }
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const currentChef = chefs.find(c => c.id === activeChef)

  return (
    <div className="os-chefs-page page-with-padding">
      <PageHero 
        image="/assets/os-chefs/banner-os-chefs-o-chef-master.webp"
        label={t('chefs.heroLabel')}
        title={t('chefs.heroTitle')}
        subtitle={t('chefs.heroSub')}
      />

      {/* Chef Switcher */}
      <section className="chefs-switcher section">
        <div className="container">
          <div className="chefs-tabs">
            {chefs.map(chef => (
              <button
                key={chef.id}
                className={`chef-tab ${activeChef === chef.id ? 'active' : ''}`}
                onClick={() => setActiveChef(chef.id)}
              >
                <span className="chef-tab-name">{chef.name}</span>
                <span className="chef-tab-role">{chef.role}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Content */}
      <section className="chefs-content section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChef.id}
              className="chef-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="chef-detail-grid">
                <div className="chef-detail-image">
                  <img 
                    src={currentChef.image} 
                    alt={currentChef.name} 
                  />
                </div>
                <div className="chef-detail-info">
                  <p className="chef-detail-role">{currentChef.role}</p>
                  <h2 className="chef-detail-name">{currentChef.name}</h2>
                  <div className="chef-detail-bio">
                    {currentChef.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  {currentChef.social?.instagram && (
                    <a 
                      href={currentChef.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="chef-instagram-link"
                    >
                      @ Instagram
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Team Photo */}
      <section className="team-section section">
        <div className="container">
          <motion.div 
            className="team-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">{t('chefs.equipeLabel')}</p>
            <h2 className="section-title">{t('chefs.equipeTitulo')}</h2>
            <p className="team-text">
              {t('chefs.equipeTexto')}
            </p>
          </motion.div>
          <motion.div 
            className="team-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/assets/os-chefs/equipe-sal-gastronomia-.webp" 
              alt="Equipe Sal Gastronomia" 
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}