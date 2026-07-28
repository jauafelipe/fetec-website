import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
)
