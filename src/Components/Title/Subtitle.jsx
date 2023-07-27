import React from 'react'
import { twMerge } from 'tailwind-merge'

function Subtitle(restProps) {
    return (
        <h3
            {...restProps}
            className={
                twMerge(`md:text-3xl uppercase text-xl subtitle font-medium font-serif text-gold-400 mb-1`, restProps.className)
            } />
    )
}

export default Subtitle