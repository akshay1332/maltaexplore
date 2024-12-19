import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import { TourismPage } from './pages/tour'
import ContactPage from './pages/contact-page'
import { AboutUsPage } from './pages/about-us'
import PrivacyPage from './pages/privacy'
import { MetapassPage } from './pages/metapass'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tours" element={<TourismPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/metapass" element={<MetapassPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
