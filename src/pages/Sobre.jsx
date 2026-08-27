import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import './Sobre.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Sobre() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sobre-page page-with-padding">
      <PageHero 
        image="/assets/ambiente-2.jpg"
        label="Nossa História"
        title="O Sal Gastronomia"
        subtitle="Desde 2005 conquistando paladares em São Paulo"
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
              <p className="section-label">Quem Somos</p>
              <h2 className="section-title">Mais do que comida boa</h2>
              <p className="story-text">
                Aqui no SAL você viverá uma experiência gastronômica completa, 
                em um ambiente aconchegante, com uma equipe pronta para lhe atender.
              </p>
              <p className="story-text">
                A cozinha do SAL é marcada pelo tempero acentuado e qualidade 
                dos ingredientes, uma forte característica do Chef Henrique Fogaça, 
                que é não ter medo de errar e ousar em suas criações.
              </p>
              <p className="story-text">
                O cardápio segue a linha brasileira contemporânea, com criações 
                exclusivas que surpreendem a cada mordida.
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
                  src="/assets/lombo-de-cordeiro-pure-de-dois-queijos-funghi-e-molho-de-jabuticaba-1024x683.jpg" 
                  alt="Prato do Sal" 
                />
              </div>
              <div className="story-img-accent">
                <img 
                  src="/assets/ambiente-3.jpg" 
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
            <p className="section-label">Trajetória</p>
            <h2 className="section-title">Nossa História</h2>
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
                <h3>Inauguração</h3>
                <p>
                  O Sal Gastronomia é fundado no bairro de Higienópolis, 
                  São Paulo, trazendo uma nova proposta de cozinha brasileira contemporânea.
                </p>
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
                <h3>Segunda Unidade</h3>
                <p>
                  Inauguração da segunda casa no Shopping Cidade Jardim, 
                  no bairro do Morumbi, com um ambiente privilegiado e vista para a cidade.
                </p>
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
                <h3>Renovação</h3>
                <p>
                  A unidade de Higienópolis encerra suas atividades em dezembro, 
                  enquanto a unidade do Shopping Cidade Jardim continua forte, 
                  agora complementada pela nova unidade Bela Cintra nos Jardins.
                </p>
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
                <h3>Presente</h3>
                <p>
                  Duas unidades funcionando em São Paulo, continuando a tradição 
                  de oferecer experiências gastronômicas únicas e inesquecíveis.
                </p>
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
            <p className="section-label">Valores</p>
            <h2 className="section-title">O Que Nos Move</h2>
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
              <h3>Qualidade</h3>
              <p>
                Ingredientes selecionados e tempero preciso em cada prato 
                que sai da nossa cozinha.
              </p>
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
              <h3>Ousadia</h3>
              <p>
                Não temos medo de errar e ousar em nossas criações, 
                sempre buscando surpreender.
              </p>
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
              <h3>Acolhimento</h3>
              <p>
                Um ambiente aconchegante e equipe pronta para proporcionar 
                a melhor experiência.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}