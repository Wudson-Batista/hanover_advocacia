import React from 'react'
import Socials from './Socials'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


export default function TopNav({ offset }) {
    return (
        <div className={`top transition-all duration-300 border-b border-white text-xs font-normal ${offset > 50 ? 'invisible opacity-0 py-0 h-0' : 'visible opacity-100 py-3'}`}>
            <div className={`container flex md:justify-between justify-center items-center`}>
                <div className={`contact flex gap-3 md:flex-row flex-col items-center`}>
                    <div className={`phone flex items-center gap-1`}>
                        <div className="icon">
                            <FaPhoneAlt></FaPhoneAlt>
                        </div>
                        <span>+55 (99) 99999-9999</span>
                    </div>
                    <div className="phone flex items-center gap-1">
                        <div className="icon">
                            <FaEnvelope></FaEnvelope>
                        </div>
                        <span>exemple@email.com</span>
                    </div>
                </div>
                <Socials size='text-lg' header={true}></Socials>
            </div>

        </div>
    )
}
