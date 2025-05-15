import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed flex pt-[2vh] justify-center w-full z-50">
      <div className="flex backdrop-blur-md bg-opacity-[30%] shadow-xl bg-blue-100 text-black items-center justify-between rounded-[3vw] gap-[5vw] text-[4.2vw] sm:text-[1.8vh] md:text-[2.4vh] lg:text-[2.4vh] font-thin px-[5vw] p-[2vw]">
        <NavLink to="/" className="hover:text-blue-800 transition-colors duration-300">HOME</NavLink>
        <NavLink to="/Certifications" className="hover:text-blue-800 transition-colors duration-300">CERTIFICATIONS</NavLink>
        <NavLink to="/Projects" className="hover:text-blue-800 transition-colors duration-300">PROJECTS</NavLink>
        
      </div>
    </nav>
  )
}

export default Navbar
