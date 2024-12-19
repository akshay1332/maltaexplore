import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
}

const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about-us' },
  { name: 'Tour Listing', path: '/tours' },
  { name: 'Contact', path: '/contact' },
  { name: 'Supplier Registration', path: '/supplier-registration' },
  { name: 'Metapass', path: '/metapass' },
  { name: 'Privacy', path: '/privacy' }
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a 
            href="/"
            className="text-xl md:text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logo Here
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`
                    ${item.path === '/' 
                      ? 'text-[#E5484D] font-medium' 
                      : 'text-gray-600 hover:text-[#E5484D] transition-colors duration-200'}
                  `}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#FFE4E5] text-[#E5484D] hover:bg-[#E5484D] hover:text-white transition-colors duration-300"
              onClick={() => setIsSignupOpen(true)}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={menuItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`
                    block px-4 py-2 rounded-lg 
                    ${item.path === '/' 
                      ? 'text-[#E5484D] font-medium' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#E5484D] transition-colors duration-200'}
                  `}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="px-4 pt-2">
              <Button 
                className="w-full bg-[#FFE4E5] text-[#E5484D] hover:bg-[#E5484D] hover:text-white transition-colors duration-300"
                onClick={() => setIsSignupOpen(true)}
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  )
}
