import React from 'react'

function ContactInfo({ info, icon }) {
    return (
        <div className='flex md:flex-row flex-col max-md:text-center lg:gap-4 gap-2 items-center '>
            <div className="bg-white shrink-0 phone border border-blue-grey-200/30 w-12 h-12 rounded-full flex justify-center items-center shadow">
                {icon}
            </div>
            <p className='font-medium'>
                {info}
            </p>
        </div>
    )
}

export default ContactInfo