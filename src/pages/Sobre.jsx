import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import './Sobre.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Sobre() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sobre-page page-with-padding">
      <PageHero 
        image="/assets/ambiente-2.webp"
        label={t('sobre.heroLabel')}
        title={t('sobre.heroTitle')}
        subtitle={t('sobre.heroSub')}
      />

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">{t('sobre.quemSomos')}</p>
              <h2 className="section-title">{t('sobre.quemSomosTitulo')}</h2>
              <p className="story-text">
                {t('sobre.quemSomosTexto1')}
              </p>
              <p className="story-text">
                {t('sobre.quemSomosTexto2')}
              </p>
              <p className="story-text">
                {t('sobre.quemSomosTexto3')}
              </p>
            </motion.div>
            
            <motion.div 
              className="story-images"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="story-img-main">
                <img 
                  src="/assets/lombo-de-cordeiro-pure-de-dois-queijos-funghi-e-molho-de-jabuticaba-1024x683.webp" 
                  alt="Prato do Sal" 
                />
              </div>
              <div className="story-img-accent">
                <img 
                  src="/assets/ambiente-3.webp" 
                  alt="Ambiente" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section section">
        <div className="container">
          <motion.div 
            className="timeline-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">{t('sobre.trajetoriaLabel')}</p>
            <h2 className="section-title">{t('sobre.trajetoriaTitulo')}</h2>
          </motion.div>

          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h3>{t('sobre.inauguracao')}</h3>
                <p>{t('sobre.inauguracaoDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>{t('sobre.segundaUnidade')}</h3>
                <p>{t('sobre.segundaUnidadeDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>{t('sobre.renovacao')}</h3>
                <p>{t('sobre.renovacaoDesc')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="timeline-year">Hoje</div>
              <div className="timeline-content">
                <h3>{t('sobre.presente')}</h3>
                <p>{t('sobre.presenteDesc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section">
        <div className="container">
          <motion.div 
            className="values-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">{t('sobre.valoresLabel')}</p>
            <h2 className="section-title">{t('sobre.valoresTitulo')}</h2>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="value-icon">✦</div>
              <h3>{t('sobre.qualidade')}</h3>
              <p>{t('sobre.qualidadeDesc')}</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="value-icon">✦</div>
              <h3>{t('sobre.ousadia')}</h3>
              <p>{t('sobre.ousadiaDesc')}</p>
            </motion.div>

            <motion.div 
              className="value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="value-icon">✦</div>
              <h3>{t('sobre.acolhimento')}</h3>
              <p>{t('sobre.acolhimentoDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}