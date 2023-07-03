import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Socials({ size }) {
    return (
        <div className={`socials md:flex gap-4 hidden ${size}`}>
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