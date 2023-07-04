import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo-v1.svg'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import cards from '../services/cards'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
  const linkStyle = `p-2 transition hover:text-gold-300 font-medium`

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className={`navbar w-full`}>
      <div className={`container my-2 flex justify-between items-center w-full`}>
        <div className="logo lg:w-auto sm:w-56 w-48">
          <Link>
            <img className='' src={logo} alt="Hanover Advocacia Logotipo" />
          </Link>
        </div>
        <nav className="nav desktop md:block hidden">
          <ul className='flex items-center gap-5'>
            <li><NavLink to='/' className={`${linkStyle}`}>Home</NavLink></li>
            <li
              className='relative group'
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <NavLink
                to='/atuações'
                className={`${linkStyle} flex gap-2 items-center`}>
                <span>Atuações</span>
                <FaChevronDown className='transition-transform duration-300 group-hover:-rotate-180'></FaChevronDown>
              </NavLink>
              <div
                id="dropdownHover"
                className={`z-10 bg-white text-black absolute top-full divide-y divide-gray-100 ease-in-out transition duration-200 rounded-lg shadow w-52 first-letter
                  ${isDropdownVisible ? 'visible opacity-100' : 'opacity-0 invisible'}
                `}
              >
                <ul className="py-2 text-sm text-blue-grey-700" aria-labelledby="dropdownHoverButton">
                  {
                    cards.map(actuation => (
                      <li key={actuation.id} >
                        <Link className="block px-4 py-2 bg-white hover:bg-blue-grey-200/70">{actuation.title}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>
            </li>
            <li>
              <HashLink
                className={`${linkStyle}`}
                smooth to="/#about"

              >
                Sobre Nós
              </HashLink>
            </li>
            <li>
              <HashLink
                className={`${linkStyle}`}
                smooth to="/#contact"
              >
                Fale Conosco
              </HashLink>
            </li>
          </ul>
        </nav>

        <nav className={`nav mobile md:hidden block fixed pt-10 top-0 bg-black p-4 transition-[right] duration-300 h-screen z-10 w-48
              ${isMenuVisible ? 'right-0' : '-right-60'}`}>
          <div className="nav-header mt-2 mb-6">
            <div className="close-btn flex justify-end">
              <FaTimes
                className='text-red-400 cursor-pointer text-3xl'
                onClick={() => setIsMenuVisible(false)}
              />
            </div>
          </div>
          <ul className={`flex flex-col gap-2 items-center`}>
            <li className='w-full text-left'>
              <NavLink to='/' className={`${linkStyle} inline-block w-full`}>Home</NavLink>
            </li>
            <li className='w-full text-left relative'>
              <NavLink
                to='/atuações'
                className={`${linkStyle} w-full flex gap-2 items-center `}
              >
                <span>Atuações</span>
                <FaChevronDown></FaChevronDown>
              </NavLink>
            </li>
            <li className='w-full text-left'>
              <HashLink
                className={`${linkStyle}`}
                smooth to="/#about"
              >
                Sobre Nós
              </HashLink>
            </li>
            <li className='w-full text-left'>
              <HashLink
                className={`${linkStyle}`}
                smooth to="/#contact"
              >
                Fale Conosco
              </HashLink>
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