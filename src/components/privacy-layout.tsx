import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-xl font-bold">
                MaltaXplore
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-red-500">Home</Link>
                <Link to="/about-us" className="text-gray-600 hover:text-gray-900">About us</Link>
                <Link to="/tours" className="text-gray-600 hover:text-gray-900">Tours</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
              </nav>
            </div>
            <Button variant="secondary" className="bg-pink-100 text-gray-900 hover:bg-pink-200">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
