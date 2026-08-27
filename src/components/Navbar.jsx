import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/sobre', label: 'O Sal' },
  { path: '/chef', label: 'Chef' },
  { path: '/cardapio', label: 'Cardápio' },
  { path: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

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
          <img src="/assets/logo-sticky.png" alt="Sal Gastronomia" className="logo-image" />
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
          <a 
            href="https://reservation.getin.app/VknaxK6O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="navbar-cta btn btn-primary"
          >
            Reservas
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
              <a 
                href="https://reservation.getin.app/VknaxK6O" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta"
              >
                Reservas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}