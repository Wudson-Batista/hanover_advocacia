import React from 'react'
import Socials from './Socials'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


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
                <Socials size='text-lg' header={true}></Socials>
            </div>

        </div>
    )
}
