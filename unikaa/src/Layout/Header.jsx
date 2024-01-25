import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo_top.jpg"

const navLinks = [
  {
    name:"Home",
    path:"/"
  },
  {
    name:"About",
    path:"/about"
  },
  {
    name:"Product",
    path:"/product"
  },
  {
    name:"FAQ",
    path:"/faq"
  },
  {
    name:"Gallery",
    path:"/gallery"
  },
  {
    name:"Contact",
    path:"/contact"
  },
] 

function Header() {
  return (
    <nav className='sticky flex items-center justify-between py-3 mx-14'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='hidden text-lg md:flex space-x-7 font-kumbh text-cyan-600'>
          {navLinks.map((link)=>(
            <NavLink to={link.path}  className={({ isActive }) =>
            isActive && "text-red-500 font-bold"
          }>{link.name}</NavLink>
          ))}
        </div>
        <div className='md:hidden'>
          .-'
        </div>
    </nav>
  )
}

export default Header
