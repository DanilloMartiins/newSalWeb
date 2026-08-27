import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://www.instagram.com/salgastronomia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://www.facebook.com/salgastronomia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            Facebook
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sal Gastronomia. Todos os direitos reservados.</p>
          <p className="footer-developer">
            Desenvolvido por <a href="https://www.linkedin.com/in/danillomartins/" target="_blank" rel="noopener noreferrer">Danillo Martins</a>
          </p>
        </div>
      </div>
    </footer>
  )
}