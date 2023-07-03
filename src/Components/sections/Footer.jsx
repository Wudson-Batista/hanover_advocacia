import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-v1.svg'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Socials from '../Socials'

function Footer() {
    return (
        <footer className='bg-footer py-9'>
            <div className="container">
                <div className='grid grid-cols-4 items-center py-3 border-b border-blue-grey-200/40'>
                    <div className="logo md:w-56 w-48">
                        <Link className='inline-block justify-self-center'>
                            <img className='' src={logo} alt="Hanover Advocacia Logotipo" />
                        </Link>
                    </div>
                    <div className="contact col-span-2 flex gap-16 md:flex-row flex-col items-center text-white text-sm justify-self-center">
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
            </div>
        </footer>
    )
}

export default Footer