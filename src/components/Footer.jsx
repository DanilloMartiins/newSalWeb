import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">SAL</h3>
            <p className="footer-tagline">Gastronomia</p>
            <p className="footer-description">
              Uma experiência gastronômica única, onde o tempero acentuado 
              e a qualidade dos ingredientes se encontram.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <Link to="/">Início</Link>
            <Link to="/sobre">O Sal</Link>
            <Link to="/chef">Chef</Link>
            <Link to="/cardapio">Cardápio</Link>
            <Link to="/reservas">Reservas</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <div className="footer-links">
            <h4>Horários</h4>
            <p>Seg - Qui: 12h às 23h</p>
            <p>Sexta: 12h às 23h</p>
            <p>Sábado: 12h às 23h</p>
            <p>Domingo: 12h às 22h</p>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>Cidade Jardim: (11) 3198-9505</p>
            <p>Bela Cintra: (11) 3554-4460</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/salgastronomia/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.facebook.com/salgastronomia" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Sal Gastronomia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}