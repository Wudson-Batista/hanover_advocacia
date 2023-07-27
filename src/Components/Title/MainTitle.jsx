import React from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

function MainTitle(restProps) {
    return (
        <h1 {...restProps}
            className={
                twMerge('text-white md:text-md sm:text-md text-sm title font-semibold', restProps.className)}
        />
    )
}

export default MainTitle