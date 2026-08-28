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
    { path: '/', label: t('nav.inicio'), icon: 'home' },
    { path: '/sobre', label: t('nav.sobre'), icon: 'info' },
    { path: '/os-chefs', label: t('nav.chefs'), icon: 'chef' },
    { path: '/cardapio', label: t('nav.cardapio'), icon: 'menu' },
    { path: '/contato', label: t('nav.contato'), icon: 'contact' },
  ]

  const mobileTabLinks = [
    { path: '/os-chefs', label: t('nav.chefs'), icon: 'fork-knife' },
    { path: '/sobre', label: t('nav.sobre'), icon: 'house' },
    { path: '/', label: t('nav.inicio'), icon: 'skull' },
    { path: '/cardapio', label: t('nav.cardapio'), icon: 'menu' },
    { path: '/contato', label: t('nav.contato'), icon: 'contact' },
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
      {/* Desktop */}
      <div className="navbar-container desktop-nav">
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
      </div>

      {/* Mobile - Top Bar */}
      <div className="mobile-topbar">
        <Link to="/" className="navbar-logo">
          <img src="/assets/favicon.webp" alt="Sal Gastronomia" className="logo-image" />
        </Link>

        <div className="mobile-topbar-actions">
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
            className="mobile-topbar-cta"
          >
            {t('nav.reservas')}
          </a>
        </div>
      </div>

      {/* Mobile - Bottom Tab Bar */}
      <div className="mobile-bottombar">
        {mobileTabLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-tab ${location.pathname === link.path ? 'active' : ''}`}
          >
            <span className="mobile-tab-icon">
              {link.icon === 'skull' ? (
                <img src="/assets/favicon.webp" alt="" className="mobile-tab-logo" />
              ) : link.icon === 'house' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              ) : link.icon === 'fork-knife' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2c-2 0-5 2-5 7 0 3 1 5 3 6v7"/></svg>
              ) : link.icon === 'menu' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              )}
            </span>
            <span className="mobile-tab-label">{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Mobile - Full Screen Menu (hamburger) */}
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