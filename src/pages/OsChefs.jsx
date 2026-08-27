import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import './OsChefs.css'

const chefs = [
  {
    id: 'fogaca',
    name: 'Henrique Fogaça',
    role: 'Chef Responsável pelo Cardápio',
    image: '/assets/os-chefs/imagem-os-chefs-fogaca-1024x683.jpg',
    bio: [
      'Henrique Fogaça é o Chef responsável pelo Cardápio do Sal Gastronomia. Cozinheiro, Pai da Olívia, do João e da Maria Letícia.',
      'Um chef de cozinha e empresário brasileiro nascido em Piracicaba, interior de São Paulo. Ele também faz parte do time de jurados do programa "MasterChef Brasil", exibido pela Band e que estreou em 2014.',
      'No início da carreira, Henrique comprava ingredientes no Ceasa e passava horas misturando, experimentando e testando as suas descobertas.',
      'Começou com um pequeno food truck e após anos de estudos, feedbacks de clientes, sempre acreditando que não existe nada impossível e vencendo as dificuldades de empreender, o Chef inaugurou o seu primeiro restaurante com pratos autorais, elaborados com ingredientes de qualidade e muito bom gosto.',
      'Hoje, o também jurado do reality da BAND, Henrique Fogaça divide a vida entre as cozinhas do Sal Gastronomia, Sal Grosso, Cão Véio, a banda de rock Oitão onde é vocalista, e a família, que é sua base e o que o faz querer ser melhor a cada dia.'
    ],
    social: {
      instagram: 'https://www.instagram.com/chefhenriquefogaca/'
    }
  },
  {
    id: 'douglas',
    name: 'Douglas Chavez',
    role: 'Chef Executivo',
    image: '/assets/os-chefs/imagem-os-chefs-douglas-1024x683.jpg',
    bio: [
      'O interesse na gastronomia se inicia na infância onde na família ajudava os pais no comércio alimentício. Como amador surge a vontade em aprender mais e ter conhecimentos sobre a gastronomia.',
      'Fez curso técnico e faculdade ao concluir o curso nesse tempo surge oportunidade de ingressar como estagiário no restaurante Sal Gastronomia, de onde já conhecia o Henrique Fogaça em seus shows de rock.',
      'Deu início ao estágio, e em pouco tempo, e com muito trabalho, virou Sub Chef. Saiu do restaurante e logo após algum tempo retornou ao convite do Chef Henrique, fez eventos dentro e fora do restaurante e em alguns estados inclusive fora do Brasil.',
      'A sua volta trouxe a oportunidade de Chefiar a casa Sal Gastronomia Higienópolis, primeira unidade do SAL.',
      'Nessa caminhada de ida e vinda já se passou 10 anos ao lado do Chef Henrique Fogaça, ajudando a manter o padrão e prestígio, aumentando ainda mais o sucesso do Sal Gastronomia.'
    ],
    social: {
      instagram: 'https://www.instagram.com/chefdouglaschavez/'
    }
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function OsChefs() {
  const [activeChef, setActiveChef] = useState('fogaca')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const currentChef = chefs.find(c => c.id === activeChef)

  return (
    <div className="os-chefs-page page-with-padding">
      <PageHero 
        image="/assets/os-chefs/banner-os-chefs-o-chef-master.png"
        label="Equipe"
        title="Os Chefs"
        subtitle="O talento por trás de cada prato"
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
            <p className="section-label">A Equipe</p>
            <h2 className="section-title">Juntos pela Excelência</h2>
            <p className="team-text">
              Sob a liderança dos Chefs Henrique Fogaça e Douglas Chavez, 
              a equipe do Sal Gastronomia trabalha com paixão e dedicação 
              para offerer uma experiência gastronômica inesquecível.
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
              src="/assets/os-chefs/equipe-sal-gastronomia-.jpg" 
              alt="Equipe Sal Gastronomia" 
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}