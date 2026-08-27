import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

const languages = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ja', label: 'JA' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const navLinks = [
    { path: '/', label: t('nav.inicio') },
    { path: '/sobre', label: t('nav.sobre') },
    { path: '/os-chefs', label: t('nav.chefs') },
    { path: '/cardapio', label: t('nav.cardapio') },
    { path: '/contato', label: t('nav.contato') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setLangOpen(false)
  }, [location])

  const changeLang = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-links-left">
          {navLinks.slice(0, 3).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/" className="navbar-logo">
          <img src="/assets/favicon.webp" alt="Sal Gastronomia" className="logo-image" />
        </Link>

        <div className="navbar-links-right">
          {navLinks.slice(3).map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="lang-selector">
            <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
              {currentLang.label}
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                    onClick={() => changeLang(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="https://reservation.getin.app/VknaxK6O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-cta btn btn-primary"
          >
            {t('nav.reservas')}
          </a>
        </div>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mobile-lang">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`mobile-lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                    onClick={() => changeLang(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <a 
                href="https://reservation.getin.app/VknaxK6O" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta"
              >
                {t('nav.reservas')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}