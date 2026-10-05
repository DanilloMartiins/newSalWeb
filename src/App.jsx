import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const Home = React.lazy(() => import('./pages/Home'))
const Sobre = React.lazy(() => import('./pages/Sobre'))
const OsChefs = React.lazy(() => import('./pages/OsChefs'))
const Cardapio = React.lazy(() => import('./pages/Cardapio'))
const Reservas = React.lazy(() => import('./pages/Reservas'))
const Contato = React.lazy(() => import('./pages/Contato'))

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, Component: Home },
      { path: 'sobre', Component: Sobre },
      { path: 'os-chefs', Component: OsChefs },
      { path: 'cardapio', Component: Cardapio },
      { path: 'reservas', Component: Reservas },
      { path: 'contato', Component: Contato },
    ],
  },
]
