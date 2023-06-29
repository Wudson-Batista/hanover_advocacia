import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo-v1.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const linkStyle = `p-2 transition hover:text-gold-300 font-medium`

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="navbar my-2">
      <div className="container flex justify-between items-center">
        <div className="logo lg:w-auto w-56">
          <Link>
            <img className='' src={logo} alt="Hanover Advocacia Logotipo" /></Link>
        </div>
        <nav className="nav desktop md:block hidden">
          <ul className='flex items-center gap-5'>
            <li><NavLink to='/' className={`${linkStyle}`}>Home</NavLink></li>
            <li><NavLink to='/atuações' className={`${linkStyle}`}>Atuações</NavLink></li>
            <li><div className={`${linkStyle}`}>Sobre Nós</div></li>
            <li><div className={`${linkStyle}`}>Fale Conosco</div></li>
          </ul>
        </nav>

        <nav className={`nav mobile md:hidden block fixed top-0 bg-black px-6 p-4 transition-[right] duration-300 h-screen z-10 w-48 
        ${isMenuVisible ? 'right-0' : '-right-60'}`}>
          <div className="nav-header mt-2 mb-6">
            <div className="close-btn flex justify-end">
              <FaTimes
                className='text-red-400 cursor-pointer text-xl'
                onClick={() => setIsMenuVisible(false)}
              />
            </div>
          </div>
          <ul className={`flex flex-col gap-5 items-center`}>
            <li className='w-full text-left'>
              <NavLink to='/' className={`${linkStyle} inline-block w-full`}>Home</NavLink>
            </li>
            <li className='w-full text-left'>
              <NavLink to='/atuações' className={`${linkStyle}  inline-block w-full`}>Atuações</NavLink>
            </li>
            <li className='w-full text-left'>
              <div className={`${linkStyle}  inline-block w-full`}>Sobre Nós</div>
            </li>
            <li className='w-full text-left'>
              <div className={`${linkStyle}  inline-block w-full`}>Fale Conosco</div>
            </li>
          </ul>
        </nav>
        <div className="menu-btn md:hidden block text-3xl cursor-pointer">
          <FaBars onClick={() => setIsMenuVisible(true)}></FaBars>
        </div>
      </div>
    </div >
  )
}

export default Navbar