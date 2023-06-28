import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo-v1.svg'

function Navbar() {
  const linkStyle = `p-2 transition hover:text-gold-300 font-medium`

  return (
    <div className="navbar my-2">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link>
            <img className='' src={logo} alt="Hanover Advocacia Logotipo" /></Link>
        </div>
        <nav className="nav">
          <ul className='flex items-center gap-5'>
            <li><NavLink to='/' className={`${linkStyle}`}>Home</NavLink></li>
            <li><NavLink to='/atuações' className='p-2 transition hover:text-gold-300 font-medium'>Atuações</NavLink></li>
            <li><div className='p-2 transition hover:text-gold-300 font-medium'>Sobre Nós</div></li>
            <li><div className='p-2 transition hover:text-gold-300 font-medium'>Fale Conosco</div></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar