import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import './Cardapio.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Cardapio() {
  const { t } = useTranslation()

  const categories = [
    { key: 'Todos', label: t('cardapio.todos') },
    { key: 'Entradas', label: t('cardapio.entradas') },
    { key: 'Pratos Principais', label: t('cardapio.pratos') },
    { key: 'Sobremesas', label: t('cardapio.sobremesas') },
    { key: 'Bebidas', label: t('cardapio.bebidas') }
  ]

  const dishes = [
    {
      id: 1,
      name: t('cardapio.itens.aligot.nome'),
      description: t('cardapio.itens.aligot.desc'),
      category: 'Pratos Principais',
      image: '/assets/aligot.webp',
      highlight: true
    },
    {
      id: 2,
      name: t('cardapio.itens.tagliatelle.nome'),
      description: t('cardapio.itens.tagliatelle.desc'),
      category: 'Entradas',
      image: '/assets/lombo-de-cordeiro-pure-de-dois-queijos-funghi-e-molho-de-jabuticaba-1024x683.webp',
      highlight: true
    },
    {
      id: 3,
      name: t('cardapio.itens.polenta.nome'),
      description: t('cardapio.itens.polenta.desc'),
      category: 'Entradas',
      image: '/assets/polenta-cremosa-com-linguica-300x300.webp',
      highlight: true
    },
    {
      id: 4,
      name: t('cardapio.itens.burrata.nome'),
      description: t('cardapio.itens.burrata.desc'),
      category: 'Entradas',
      image: '/assets/burrata_sal_gastronomia-300x300.webp',
      highlight: false
    },
    {
      id: 5,
      name: t('cardapio.itens.casa.nome'),
      description: t('cardapio.itens.casa.desc'),
      category: 'Pratos Principais',
      image: '/assets/imagem-home-destaque-2-c-cav_.webp',
      highlight: false
    },
    {
      id: 6,
      name: t('cardapio.itens.cupim.nome'),
      description: t('cardapio.itens.cupim.desc'),
      category: 'Pratos Principais',
      image: '/assets/imagem-home-destaque-5-reservas-c-cav.webp',
      highlight: false
    },
    {
      id: 7,
      name: t('cardapio.itens.pudim.nome'),
      description: t('cardapio.itens.pudim.desc'),
      category: 'Sobremesas',
      image: '/assets/ambiente-1.webp',
      highlight: true
    },
    {
      id: 8,
      name: t('cardapio.itens.primavera.nome'),
      description: t('cardapio.itens.primavera.desc'),
      category: 'Sobremesas',
      image: '/assets/ambiente-2.webp',
      highlight: false
    },
    {
      id: 9,
      name: t('cardapio.itens.drink.nome'),
      description: t('cardapio.itens.drink.desc'),
      category: 'Bebidas',
      image: '/assets/ambiente-3.webp',
      highlight: false
    }
  ]

  const [activeCategory, setActiveCategory] = useState('Todos')
  const [filteredDishes, setFilteredDishes] = useState(dishes)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (activeCategory === 'Todos') {
      setFilteredDishes(dishes)
    } else {
      setFilteredDishes(dishes.filter(dish => dish.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <div className="cardapio-page page-with-padding">
      <PageHero 
        image="/assets/hero-2.webp"
        label={t('cardapio.heroLabel')}
        title={t('cardapio.heroTitle')}
        subtitle={t('cardapio.heroSub')}
      />

      {/* Categories Filter */}
      <section className="cardapio-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-tab ${activeCategory === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="dishes-section section">
        <div className="container">
          <motion.div 
            className="dishes-grid"
            layout
          >
            {filteredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                className={`dish-card ${dish.highlight ? 'highlight' : ''}`}
                layout
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  {dish.highlight && (
                    <span className="dish-badge">{t('cardapio.destaque')}</span>
                  )}
                </div>
                <div className="dish-content">
                  <span className="dish-category">{categories.find(c => c.key === dish.category)?.label}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="cardapio-note">
            <p>{t('cardapio.note')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cardapio-cta">
        <div className="cardapio-cta-bg">
          <img 
            src="/assets/parallax.webp" 
            alt="Reservas" 
          />
          <div className="cardapio-cta-overlay"></div>
        </div>
        <motion.div 
          className="cardapio-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('cardapio.ctaTitulo')}</h2>
          <p>{t('cardapio.ctaSub')}</p>
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