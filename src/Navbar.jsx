import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black'>
      <nav className=' bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-pink-500 '>
        <div className='flex items-center justify-center gap-[2.5vw] text-[2.8vh] font-normal h-[12vh]'>
        <div><NavLink to='/'>Home</NavLink></div>
        <div><NavLink to='/Projects'>Projects</NavLink></div>
        <div><NavLink to='/'>Achievements</NavLink></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
