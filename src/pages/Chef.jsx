import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './Chef.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Chef() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="chef-page page-with-padding">
      {/* Hero */}
      <section className="chef-hero">
        <div className="chef-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80" 
            alt="Chef Henrique Fogaça" 
          />
          <div className="chef-hero-overlay"></div>
        </div>
        <motion.div 
          className="chef-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Chef</p>
          <h1>Henrique Fogaça</h1>
          <p>O tempero por trás do Sal Gastronomia</p>
        </motion.div>
      </section>

      {/* Chef Profile */}
      <section className="chef-profile section">
        <div className="container">
          <div className="chef-grid">
            <motion.div 
              className="chef-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="chef-main-image">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ez4536e7c?w=600&q=80" 
                  alt="Chef Henrique Fogaça" 
                />
              </div>
              <div className="chef-accent-image">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80" 
                  alt="Chef cozinhando" 
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="chef-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="section-label">Conheça o Chef</p>
              <h2 className="section-title">Henrique Fogaça</h2>
              
              <div className="chef-bio">
                <p>
                  O Chef Henrique Fogaça é o coração e a alma do Sal Gastronomia. 
                  Sua paixão pela culinária brasileira contemporânea se reflete em 
                  cada prato que cria.
                </p>
                <p>
                  Conhecido por sua ousadia e criatividade, Fogaça não tem medo 
                  de errar e reinventar, trazendo sabores inesperados e combinações 
                  surpreendentes ao cardápio.
                </p>
                <p>
                  Sob sua liderança, o Sal Gastronomia se tornou referência em 
                  gastronomia em São Paulo, conquistando paladares e emocionando 
                  clientes desde 2005.
                </p>
              </div>

              <div className="chef-quote">
                <blockquote>
                  "Cozinhar é um ato de amor. Cada prato leva um pedaço 
                  de quem faz e recebe quem come."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section section">
        <div className="container">
          <motion.div 
            className="philosophy-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Filosofia</p>
            <h2 className="section-title">Cozinha Brasileira Contemporânea</h2>
          </motion.div>

          <div className="philosophy-grid">
            <motion.div 
              className="philosophy-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="philosophy-number">01</div>
              <h3>Ingredientes Selecionados</h3>
              <p>
                Cada ingrediente é cuidadosamente selecionado para garantir 
                a máxima qualidade e sabor em cada prato.
              </p>
            </motion.div>

            <motion.div 
              className="philosophy-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="philosophy-number">02</div>
              <h3>Criação Exclusiva</h3>
              <p>
                Receitas desenvolvidas pela equipe da casa, trazendo 
                originalidade e exclusividade ao cardápio.
              </p>
            </motion.div>

            <motion.div 
              className="philosophy-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="philosophy-number">03</div>
              <h3>Ousadia e Inovação</h3>
              <p>
                Não ter medo de errar e ousar em criações, sempre buscando 
                surpreender e encantar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section section">
        <div className="container">
          <motion.div 
            className="gallery-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Galeria</p>
            <h2 className="section-title">Nosso Trabalho</h2>
          </motion.div>

          <div className="gallery-grid">
            <motion.div 
              className="gallery-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" 
                alt="Prato 1" 
              />
            </motion.div>
            <motion.div 
              className="gallery-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" 
                alt="Prato 2" 
              />
            </motion.div>
            <motion.div 
              className="gallery-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" 
                alt="Prato 3" 
              />
            </motion.div>
            <motion.div 
              className="gallery-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" 
                alt="Prato 4" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}