import React from 'react'
import Header from './Header'

function Banner({ children, bg }) {

    return (
        <div className='banner text-white' style={{ 'backgroundImage': `url(${bg})` }}>
            <Header></Header>
                {children}
        </div >
    )
}

export default Banner