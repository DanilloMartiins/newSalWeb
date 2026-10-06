import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/PageHero'
import SEOHead from '../components/SEOHead'
import { SEO_PADRAO } from '../seo.js'
import dadosPt from '../data/cardapio.pt.js'
import dadosEn from '../data/cardapio.en.js'
import './Cardapio.css'

// nomes das casas (nome proprio, nao traduz)
const UNIDADES = {
  cj: 'Shopping Cidade Jardim',
  bc: 'Bela Cintra • Jardins',
}

// rotulo das abas por nome do menu (cj tem 8, bc tem 10)
const ROTULOS = {
  principal: { pt: 'Menu Principal', en: 'Main Menu', es: 'Menú Principal', ja: 'メインメニュー' },
  deg1: { pt: 'Menu Degustação I', en: 'Tasting Menu I', es: 'Menú Degustación I', ja: 'テイスティングコース I' },
  deg2: { pt: 'Menu Degustação II', en: 'Tasting Menu II', es: 'Menú Degustación II', ja: 'テイスティングコース II' },
  livros: { pt: 'Livros', en: 'Books', es: 'Libros', ja: '書籍' },
  comemoracoes: { pt: 'Comemorações', en: 'Celebrations', es: 'Celebraciones', ja: 'お祝い' },
  cafes: { pt: 'Cafés', en: 'Coffees', es: 'Cafés', ja: 'カフェ' },
  semalcool: { pt: 'Sem Álcool', en: 'Non-Alcoholic', es: 'Sin Alcohol', ja: 'ノンアルコール' },
  comalcool: { pt: 'Com Álcool', en: 'Alcoholic', es: 'Con Alcohol', ja: 'アルコール' },
  drinks: { pt: 'Drinks', en: 'Cocktails', es: 'Cócteles', ja: 'カクテル' },
  vinhos: { pt: 'Vinhos', en: 'Wines', es: 'Vinos', ja: 'ワイン' },
}

function rotuloAba(titulo, lang) {
  const s = (titulo || '').toLowerCase()
  let chave = null
  if (s.includes('principal')) chave = 'principal'
  else if (s.includes('degusta')) chave = s.includes('ii') ? 'deg2' : 'deg1'
  else if (s.includes('livro')) chave = 'livros'
  else if (s.includes('comemora')) chave = 'comemoracoes'
  else if (s.includes('caf')) chave = 'cafes'
  else if (s.includes('sem')) chave = 'semalcool'
  else if (s.includes('drink')) chave = 'drinks'
  else if (s.includes('vinho') || s.includes('espumante') || s.includes('champagne')) chave = 'vinhos'
  else if (s.includes('lcool')) chave = 'comalcool'
  if (!chave) return titulo
  return ROTULOS[chave][lang] || ROTULOS[chave].pt
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Cardapio() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [unidade, setUnidade] = useState('cj')
  const [menuIdx, setMenuIdx] = useState(0)
  const [aberto, setAberto] = useState(null)
  const [paginas, setPaginas] = useState({})
  const [catNav, setCatNav] = useState(0)
  const [zoom, setZoom] = useState(null)
  const [zoomTravado, setZoomTravado] = useState(false)

  // cardapio em PT e EN vindos do GetIn oficial; ES e JA caem pro PT
  // (mesmo combinado do site: PT obrigatorio, resto depois).
  // pra ligar es/ja: gerar src/data/cardapio.es.js e cardapio.ja.js e entrar aqui
  const lang = (i18n.language || 'pt').slice(0, 2)
  const dados = lang === 'en' ? dadosEn : dadosPt
  const atual = dados.find((u) => u.id === unidade) || dados[0]
  const menu = atual.menus[menuIdx] || atual.menus[0]
  const ehDeg = menu.nome.includes('Degusta') || menu.nome.includes('Tasting')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // veio da home ("ver cardapio" do destaque): cai no prato exato
  useEffect(() => {
    const alvo = location.state?.prato
    if (!alvo) return
    const uni = dadosPt.find((u) => u.id === 'cj') || dadosPt[0]
    const mi = uni.menus.findIndex((m) => m.nome.toLowerCase().includes((alvo.menu || '').toLowerCase()))
    if (mi < 0) return
    const ci = uni.menus[mi].categorias.findIndex((c) => c.nome === alvo.categoria)
    if (ci < 0) return
    const cat = uni.menus[mi].categorias[ci]
    const ii = cat.itens.findIndex((it) => it.nome.toLowerCase().includes((alvo.chave || '').toLowerCase()))
    setUnidade('cj')
    setMenuIdx(mi)
    setCatNav(ci)
    setPaginas(ii >= 0 ? { [cat.nome]: Math.floor(ii / 6) + 1 } : {})
    setTimeout(() => {
      document.getElementById('cardapio-lista')?.scrollIntoView({ block: 'start' })
    }, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // modal: esc fecha + trava scroll do fundo
  useEffect(() => {
    setZoom(null)
    setZoomTravado(false)
    if (!aberto) return
    document.body.style.overflow = 'hidden'
    function noEsc(e) {
      if (e.key === 'Escape') setAberto(null)
    }
    window.addEventListener('keydown', noEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', noEsc)
    }
  }, [aberto])

  // lupa do modal: segue o mouse, clique alterna e trava
  // (saiu no clique = mexer o mouse nao volta sozinho)
  function clicaLupa() {
    if (zoom) {
      setZoom(null)
      setZoomTravado(true)
    } else {
      setZoom({ x: 50, y: 50 })
      setZoomTravado(false)
    }
  }

  function saiLupa() {
    setZoom(null)
    setZoomTravado(false)
  }

  function moveLupa(e) {
    if (zoomTravado) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    setZoom({ x, y })
  }

  function voltaPraLista() {
    document.getElementById('cardapio-lista')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function trocaUnidade(id) {
    setUnidade(id)
    setMenuIdx(0)
    setPaginas({})
    setCatNav(0)
    voltaPraLista()
  }

  // sub-aba: só mostra a categoria clicada
  function irPraCategoria(i) {
    setCatNav(i)
    voltaPraLista()
  }
  function trocaMenu(i) {
    setMenuIdx(i)
    setPaginas({})
    setCatNav(0)
    voltaPraLista()
  }

  // troca de pagina volta pro comeco da lista
  function trocaPagina(nome, p) {
    setPaginas({ ...paginas, [nome]: p })
    voltaPraLista()
  }

  // pacotes com preco (ex: 6 tempos R$ 367) + pratos inclusos sem preco
  const pacotes = []
  const pratosMesa = []
  if (ehDeg) {
    for (const cat of menu.categorias) {
      for (const item of cat.itens) {
        if (item.preco !== 'R$ 0,00') pacotes.push(item)
        else pratosMesa.push({ ...item, categoria: cat.nome })
      }
    }
  }

  return (
    <div className="cardapio-page page-with-padding">
      <SEOHead title={SEO_PADRAO.titulo} description={SEO_PADRAO.descricao} path="/cardapio" />
      <PageHero
        image="/assets/hero-2.webp"
        label={t('cardapio.heroLabel')}
        title={t('cardapio.heroTitle')}
        subtitle={t('cardapio.heroSub')}
      />

      {/* Unidade */}
      <section className="cardapio-filter">
        <div className="container">
          <div className="filter-tabs unidade-tabs">
            {dados.map((u) => (
              <button
                key={u.id}
                className={`filter-tab ${unidade === u.id ? 'active' : ''}`}
                onClick={() => trocaUnidade(u.id)}
              >
                {UNIDADES[u.id]}
              </button>
            ))}
          </div>
          <div className="filter-tabs">
            {atual.menus.map((m, i) => (
              <button
                key={m.id}
                className={`filter-tab ${menuIdx === i ? 'active' : ''}`}
                onClick={() => trocaMenu(i)}
              >
                {rotuloAba(m.nome, lang)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Degustacao = mesa rolavel com hover */}
      {ehDeg ? (
        <section className="dishes-section section">
          <div className="container" key={unidade + menu.id}>
            <div className="deg-pacotes">
              {pacotes.map((p) => (
                <div key={p.nome} className="deg-pacote">
                  <div>
                    <h2>{p.nome}</h2>
                    {p.desc && <p>{p.desc}</p>}
                  </div>
                  <span className="deg-preco">{p.preco}</span>
                </div>
              ))}
            </div>
            <div className="mesa">
              {pratosMesa.map((item) => (
                <div
                  key={item.nome}
                  className="mesa-prato"
                  tabIndex={0}
                  onClick={() => setAberto(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setAberto(item)
                  }}
                >  {item.foto && <img src={item.foto} alt={item.nome} loading="lazy" />}
                  <div className="mesa-overlay">
                    <span className="mesa-cat">{item.categoria}</span>
                    <strong>{item.nome}</strong>
                    {item.desc && <span>{item.desc}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="cardapio-note">
              <p>{t('cardapio.note')}</p>
            </div>
          </div>
        </section>
      ) : (
      /* Pratos por categoria */
      <section className="dishes-section section">
        <div className="container" key={unidade + menu.id}>
          <div className="cardapio-layout">
            <aside className="cardapio-lateral">
              {menu.categorias.map((c, i) => (
                <button
                  key={c.nome}
                  className={`lateral-btn ${catNav === i ? 'active' : ''}`}
                  onClick={() => irPraCategoria(i)}
                >
                  {c.nome}
                </button>
              ))}
            </aside>
            <div className="cardapio-lista" id="cardapio-lista">
          {menu.categorias.map((cat, idx) => {
            if (idx !== catNav) return null
            const pagina = paginas[cat.nome] || 1
            const total = Math.ceil(cat.itens.length / 6)
            const visiveis = cat.itens.slice((pagina - 1) * 6, pagina * 6)
            return (
            <div key={cat.nome} id={'cat-' + idx} className="categoria-bloco">
              <h2 className="categoria-titulo">{cat.nome}</h2>
              <motion.div className="dishes-grid" layout>
                {visiveis.map((item) => (
                  <motion.div
                    key={item.nome}
                    className="dish-card dish-clicavel"
                    layout
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                    onClick={() => setAberto({ ...item, categoria: cat.nome })}
                  >
                    {item.foto && (
                      <div className="dish-image">
                        <img src={item.foto} alt={item.nome} loading="lazy" />
                      </div>
                    )}
                    <div className="dish-content">
                      <span className="dish-category">{cat.nome}</span>
                      <h3>{item.nome}</h3>
                      {item.desc && <p>{item.desc}</p>}
                      {item.preco !== 'R$ 0,00' && (
                        <p className="dish-preco">{item.preco}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {total > 1 && (
                <div className="paginacao">
                  <button
                    className="pag-btn"
                    disabled={pagina === 1}
                    onClick={() => trocaPagina(cat.nome, pagina - 1)}
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                  {Array.from({ length: total }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`pag-btn ${pagina === i + 1 ? 'active' : ''}`}
                      onClick={() => trocaPagina(cat.nome, i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className="pag-btn"
                    disabled={pagina === total}
                    onClick={() => trocaPagina(cat.nome, pagina + 1)}
                    aria-label="Próxima"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
            )
          })}
            </div>
          </div>

          <div className="cardapio-note">
            <p>{t('cardapio.note')}</p>
          </div>
        </div>
      </section>
      )}

      {/* Modal do prato */}
      {aberto && (
        <div className="modal-fundo" onClick={() => setAberto(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={aberto.nome}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-fechar" onClick={() => setAberto(null)} aria-label="Fechar">
              ✕
            </button>
            {aberto.foto && (
              <div
                className={`modal-foto ${zoom ? 'com-zoom' : ''}`}
                onMouseMove={moveLupa}
                onMouseLeave={saiLupa}
                onClick={clicaLupa}
              >
                <img
                  src={aberto.foto}
                  alt={aberto.nome}
                  style={
                    zoom
                      ? { transform: 'scale(2)', transformOrigin: `${zoom.x}% ${zoom.y}%` }
                      : undefined
                  }
                />
              </div>
            )}
            <div className="modal-info">
              {aberto.categoria && <span className="dish-category">{aberto.categoria}</span>}
              <h2>{aberto.nome}</h2>
              {aberto.desc && <p>{aberto.desc}</p>}
              {aberto.preco && aberto.preco !== 'R$ 0,00' ? (
                <p className="dish-preco">{aberto.preco}</p>
              ) : (
                <p className="modal-incluso">Incluso no menu degustação</p>
              )}
              <a
                href="https://reservation.getin.app/VknaxK6O"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('home.reservarMesa')}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="cardapio-cta">
        <div className="cardapio-cta-bg">
          <img
            src="/assets/parallax.webp"
            alt="Reservas"
            loading="lazy"
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
