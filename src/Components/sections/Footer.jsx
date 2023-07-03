import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-v1.svg'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Socials from '../Socials'

function Footer() {

    const actuations = [
        'Direito de Família',
        ' Direito Empresarial',
        'Direito Criminal',
        'Direito Imobiliário',
        'Direito Cibernético',
        'Direito do Consumidor',
        'Direito Trabalhista',
        'Direito Tributário',
        'Direito Previdenciário',
        'Direito Administrativo'
    ]


    return (
        <footer className='bg-footer py-9'>
            <div className="container">
                <div className='grid lg:grid-cols-4 grid-cols-1 max-lg:gap-y-5 lg:items-center lg:py-3 py-5 border-b border-blue-grey-200/40'>
                    <div className="logo md:w-56 w-48 max-lg:mx-auto">
                        <Link className='inline-block justify-self-center'>
                            <img className='' src={logo} alt="Hanover Advocacia Logotipo" />
                        </Link>
                    </div>
                    <div className="contact col-span-2 flex lg:gap-16 gap-4 lg:flex-row flex-col items-center text-white text-sm justify-self-center">
                        <div className="phone flex items-center gap-1 ">
                            <div className="icon">
                                <FaPhoneAlt></FaPhoneAlt>
                            </div>
                            <span>+55 (21) 98882-0554</span>
                        </div>
                        <div className="phone flex items-center gap-1">
                            <div className="icon">
                                <FaEnvelope></FaEnvelope>
                            </div>
                            <span>contato@hanoveradv.com</span>
                        </div>
                    </div>
                    <div className='text-white text-xl justify-self-center'>
                        <Socials size={'text-2xl'} />
                    </div>
                </div>
                <div className="actuations-links py-8 max-sm:text-center border-b border-blue-grey-200/40">
                    <h3 className="text-gold-400 font-serif text-lg uppercase">
                        Áreas de atuação
                    </h3>
                    <div className="links max-md:text-sm lg:max-w-[70%]">
                        <ul className='grid grid-rows-3 sm:grid-cols-2 gap-1 grid-cols-1 mt-4'>
                            {
                                actuations.map((actuation, index) => (
                                    <li>
                                        <Link className='text-white transition  hover:text-gold-300 '>- {actuation}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer