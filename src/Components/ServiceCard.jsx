import React from 'react'

function ServiceCard({ title, description, icon, id }) {
    return (
        <div
            className='border border-blueGray-600 bg-white rounded p-8 text-center hover:cursor-pointer transition shadow hover:shadow-xl hover:shadow-gold-400/25 hover:-translate-y-2'
        >
            <img className='m-auto' src={icon} alt={title} />
            <div className="text mt-4">
                <h3 className='font-serif text-blueGray-700 font-bold text-lg tracking-wide'>{title}</h3>
                <p className='text-sm mt-2 text-blueGray-500 font-medium'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard