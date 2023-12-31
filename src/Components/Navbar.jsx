import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo/logo-v1.svg'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import cards from '../services/cards'

function Navbar({ offset }) {
  const linkStyle = `p-2 transition hover:text-gold-300 font-medium`

  const location = useLocation()

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const hash = location.hash
    // Check if there is a hash and if an element with that id exists
    const el = hash && document.getElementById(hash.substr(1))
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [location.hash])

  return (
    <div className={`navbar w-full`}>
      <div className={`container my-2 flex justify-between items-center w-full`}>
        <div className={`logo ${offset > 50 ? 'sm:w-52 w-40' : 'lg:w-auto sm:w-56 w-48'}`}>
          <Link
            to={{ pathname: '/', hash: '#home' }}
          >
            <img className='' src={logo} alt="Hanover Advocacia Logotipo" />
          </Link>
        </div>
        <nav className="nav desktop md:block hidden">
          <ul className='flex items-center gap-5'>
            <li>
              <NavLink to={{ pathname: '/', hash: '#home' }} end='true' className={`${linkStyle}`}>Home</NavLink>
            </li>
            <li
              className='relative group'
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <NavLink
                to={'/atuações'}
                className={`${linkStyle} flex gap-2 items-center`}
                end='true'
              >
                <span>Atuações</span>
                <FaChevronDown className='transition-transform duration-300 group-hover:-rotate-180'></FaChevronDown>
              </NavLink>
              <div
                id="dropdownHover"
                className={`z-10 dropdown bg-white text-black absolute top-full divide-y divide-gray-100 ease-in-out transition duration-200 rounded-lg shadow w-52 first-letter
                  ${isDropdownVisible ? 'visible opacity-100' : 'opacity-0 invisible'}
                `}
              >
                <ul className="py-2 text-sm text-blue-grey-700" aria-labelledby="dropdownHoverButton">
                  {
                    cards.map(actuation => (
                      <li key={actuation.id} >
                        <NavLink to={`/atuações/${actuation.title.toLocaleLowerCase().split(' ').join('-')}`} className="block px-4 py-2 bg-white transition hover:bg-blue-grey-200/70">{actuation.title}</NavLink>
                      </li>
                    ))
                  }
                </ul>

              </div>
            </li>
            <li>
              <Link
                to={{ pathname: '/', hash: '#about' }}
                className={`${linkStyle}`}
                preventScrollReset={false}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                preventScrollReset={false}
                to={{ pathname: '/', hash: '#contact' }}
                className={`${linkStyle}`}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={`nav mobile md:hidden block fixed h-screen pt-10 top-0 bg-black p-4 transition-[right] duration-300 z-10 w-56
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
              <NavLink to={{ pathname: '/', hash: '#home' }} className={`${linkStyle} inline-block w-full`}>Home</NavLink>
            </li>
            <li
              className='w-full text-left relative'
              onClick={() => setIsDropdownVisible(!isDropdownVisible)}
              id='accordion-trigger'
            >
              <div
                className={`${linkStyle} w-full flex gap-2 items-center cursor-pointer`}
              >
                <span>Atuações</span>
                <FaChevronDown className={`transition duration-300 ${isDropdownVisible ? '-rotate-180' : ''}`}></FaChevronDown>
              </div>

              <div
                className={`dropdown z-10 bg-white text-black divide-gray-100 ease-in-out transition-[grid-template-rows] duration-500 rounded-lg shadow w-auto grid overflow-hidden ${isDropdownVisible ? 'grid-rows-1' : 'grid-rows-[0]'}`}
                aria-hidden={!isDropdownVisible}
                aria-labelledby='accordion-trigger'
              >
                <ul className="py-2 text-sm text-blue-grey-700" aria-labelledby="dropdownHoverButton">
                  <li>
                    <NavLink
                      to='/atuações'
                      end='true'
                      className={`block px-4 py-2 bg-white hover:bg-blue-grey-200/70`}>Todas</NavLink>
                  </li>
                  {
                    cards.map(actuation => (
                      <li key={actuation.id} >
                        <NavLink
                          to={`/atuações/${actuation.title.toLocaleLowerCase().split(' ').join('-')}`}
                          className="block px-4 py-2 bg-white hover:bg-blue-grey-200/70"
                        >
                          {actuation.title}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>

            <li className='w-full text-left'>
              <Link
                to={{ pathname: '/', hash: '#about' }}
                className={`${linkStyle} inline-block w-full`}
              >
                Sobre Nós
              </Link>
            </li>
            <li className='w-full text-left'>
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className={`${linkStyle} inline-block w-full`}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-btn md:hidden block text-3xl cursor-pointer">
          <FaBars onClick={() => setIsMenuVisible(true)}></FaBars>
        </div>
      </div >
    </div >
  )
}

export default Navbar