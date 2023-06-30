import React from 'react'

function Title({ title, subtitle, inverted }) {
    return (
        !inverted ? (
            <div className='uppercase'>
                <h3 className={`md:text-md sm:text-md text-sm subtitle font-medium font-serif text-gold-400 mb-1`}>
                    {subtitle}
                </h3>
                <h1 className={`md:text-3xl text-xl title font-semibold`}>{title}</h1>
            </div >
        )
            : (
                <div className=''>
                    <h3 className={`md:text-3xl uppercase text-xl subtitle font-medium font-serif text-gold-400 mb-1`}>
                        {subtitle}
                    </h3>
                    <h1 className={`text-white md:text-md sm:text-md text-sm title font-semibold`}>{title}</h1>
                </div >
            )
    )
}

export default Title