import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Reservas from './pages/Reservas'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Chef from './pages/Chef'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/chef" element={<Chef />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App