import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Cardapio.css'

const categories = ['Todos', 'Entradas', 'Pratos Principais', 'Sobremesas', 'Bebidas']

const dishes = [
  {
    id: 1,
    name: 'Aligot',
    description: 'Lombo de Cordeiro com purê de dois queijos, cogumelos e molho de jabuticaba',
    category: 'Pratos Principais',
    image: '/assets/aligot.jpg',
    highlight: true
  },
  {
    id: 2,
    name: 'Steak Tartare',
    description: 'Mignon com ovo de codorna frito e batata chips',
    category: 'Entradas',
    image: '/assets/lombo-de-cordeiro-pure-de-dois-queijos-funghi-e-molho-de-jabuticaba-1024x683.jpg',
    highlight: true
  },
  {
    id: 3,
    name: 'Polenta Cremosa',
    description: 'Com linguiça, requeijão e molho de tomate artesanal',
    category: 'Entradas',
    image: '/assets/polenta-cremosa-com-linguica-300x300.jpg',
    highlight: true
  },
  {
    id: 4,
    name: 'Burrata Sal Gastronomia',
    description: 'Burrata fresca com componentes da estação',
    category: 'Entradas',
    image: '/assets/burrata_sal_gastronomia-300x300.jpg',
    highlight: false
  },
  {
    id: 5,
    name: 'Prato da Casa',
    description: 'Criação exclusiva da casa com ingredientes da estação',
    category: 'Pratos Principais',
    image: '/assets/imagem-home-destaque-2-c-cav_.jpg',
    highlight: false
  },
  {
    id: 6,
    name: 'Cupim do SAL',
    description: 'Preparado na manteiga de garrafa, servido com mandioca cozida e farofa de banana',
    category: 'Pratos Principais',
    image: '/assets/imagem-home-destaque-5-reservas-c-cav.jpg',
    highlight: false
  },
  {
    id: 7,
    name: 'Pudim de Cumaru',
    description: 'Com Calda de Frutas Vermelhas e Semente de Papoula',
    category: 'Sobremesas',
    image: '/assets/ambiente-1.jpg',
    highlight: true
  },
  {
    id: 8,
    name: 'Primavera',
    description: 'Creme de Maracujá, frutas vermelhas e sorbet de manga',
    category: 'Sobremesas',
    image: '/assets/ambiente-2.jpg',
    highlight: false
  },
  {
    id: 9,
    name: 'Drink de Assinatura',
    description: 'Criação exclusiva da casa com destilados selecionados',
    category: 'Bebidas',
    image: '/assets/ambiente-3.jpg',
    highlight: false
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Cardapio() {
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
      {/* Hero */}
      <section className="cardapio-hero">
        <div className="cardapio-hero-bg">
          <img 
            src="/assets/hero-2.jpg" 
            alt="Cardápio" 
          />
          <div className="cardapio-hero-overlay"></div>
        </div>
        <motion.div 
          className="cardapio-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Cardápio</p>
          <h1>Nossos Pratos</h1>
          <p>Criações exclusivas da cozinha brasileira contemporânea</p>
        </motion.div>
      </section>

      {/* Categories Filter */}
      <section className="cardapio-filter">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
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
                    <span className="dish-badge">Destaque</span>
                  )}
                </div>
                <div className="dish-content">
                  <span className="dish-category">{dish.category}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="cardapio-note">
            <p>
              * Valores e disponibilidade sujeitos a alteração. 
              Consulte nossos garçom para mais informações.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cardapio-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Pronto para Experimentar?</h2>
            <p>Reserve sua mesa e descubra sabores únicos</p>
            <a href="/reservas" className="btn btn-primary">
              Reservar Mesa
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}