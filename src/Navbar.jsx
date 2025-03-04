import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed w-full backdrop-blur-md text-white z-50">
      <div className="flex items-center justify-center gap-[8vw] text-[2.4vh] font-normal h-[12vh]">
        <NavLink to="/" className="hover:text-blue-400 transition-colors duration-300">Home</NavLink>
        <NavLink to="/Projects" className="hover:text-blue-400 transition-colors duration-300">Projects</NavLink>
        <NavLink to="/Certifications" className="hover:text-blue-400 transition-colors duration-300">Certifications</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
