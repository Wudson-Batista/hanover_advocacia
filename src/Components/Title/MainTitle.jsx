import React from 'react'

function MainTitle({ children }) {
    return (
        <h1 className={`text-white md:text-md sm:text-md text-sm title font-semibold`}>
            {children}
        </h1>
    )
}

export default MainTitle