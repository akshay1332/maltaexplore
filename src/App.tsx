import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import ContactPage from './pages/contact-page'
import './styles/index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
