import React from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

function Label(restProps) {
    return (
        <label
            {...restProps}
            className={
                twMerge(
                    'absolute text-md text-blue-grey-300 duration-300 transform -translate-y-6 scale-75 top-2 z-10 bg-about origin-[0] cursor-text px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1',
                    restProps.className
                )
            }
        />
    )
}

export default Label