import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/Projects' },
    { name: 'CERTIFICATIONS', path: '/Certifications' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-2xl mx-auto px-2 sm:px-2 lg:px-4">
        <div className={`glass rounded-3xl px-2 py-3 transition-all duration-300 ${
          isScrolled ? 'glow' : ''
        }`}>
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-indigo-400 ${
                      isActive ? 'text-indigo-400' : 'text-gray-300'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-700"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-indigo-400 hover:bg-gray-800 rounded-lg text-center ${
                        isActive ? 'text-indigo-400 bg-gray-800' : 'text-gray-300'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
