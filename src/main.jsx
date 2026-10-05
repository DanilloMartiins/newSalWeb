import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.jsx'
import './i18n'
import './index.css'

export const createRoot = ViteReactSSG({ routes })

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
