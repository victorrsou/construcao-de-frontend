import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // O STRICT MODE AJUDA NO DESENVOLVIMENTO, ele executa as chamadas duas vezes para identificar erros! 
  <StrictMode>
    <App />
  </StrictMode>,
)
