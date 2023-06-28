import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function TopNav() {
    return (
        <div className="top py-3 border-b border-white text-xs font-normal">
            <div className="container flex md:justify-between justify-center items-center">
                <div className="contact flex gap-3 md:flex-row flex-col items-center">
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
                <div className="socials md:flex gap-4 text-lg hidden">
                    <a className='transition hover:text-gold-300' href="">
                        <FaInstagram></FaInstagram>
                    </a>
                    <a className='transition hover:text-gold-300' href="">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a className='transition hover:text-gold-300' href="">
                        <FaLinkedin></FaLinkedin>
                    </a>
                    <a className='transition hover:text-gold-300' href="">
                        <FaWhatsapp></FaWhatsapp>
                    </a>
                </div>
            </div>

        </div>
    )
}
