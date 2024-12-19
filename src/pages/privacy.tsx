import React from 'react'
import { Header } from '../components/Header'
import { PrivacyLayout } from '../components/privacy-layout'
import { Hero } from '../components/privacy-hero'
import { PrivacyContent } from '../components/privacy-content'
import { Footer } from '../components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PrivacyLayout>
        <Hero />
        <PrivacyContent />
        <Footer />
      </PrivacyLayout>
    </>
  )
}
