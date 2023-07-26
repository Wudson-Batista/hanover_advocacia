import React from 'react'

function Subtitle({ children }) {
    return (
        <h3 className={`md:text-3xl uppercase text-xl subtitle font-medium font-serif text-gold-400 mb-1`}>
            {children}
        </h3>
    )
}

export default Subtitle