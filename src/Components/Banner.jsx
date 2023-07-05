import React from 'react'
import Header from './Header'

function Banner({ children, bg, overlay }) {

    return (
        <div
            className='banner text-white'
            style={{
                'backgroundImage': `
                ${overlay
                        ? 'linear-gradient(to right, rgba(12, 16, 20, .65) 0%, rgba(12, 16, 20, .5) 80%), url(' + bg + ')'
                        : 'url(' + bg + ')'
                    }`
            }}
        >
            <Header />
            <div className='container flex items-center h-screen'>
                {children}
            </div>
        </div >
    )
}

export default Banner