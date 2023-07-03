import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Socials({ size, header }) {
    return (
        <div className={`socials gap-4 ${size} ${header ? 'md:flex hidden' : 'flex gap-6'}`}>
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
    )
}

export default Socials