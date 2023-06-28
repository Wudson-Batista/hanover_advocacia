import React from 'react'

function Button({children, bg}) {
    return (
        <button className={`rounded transition ${bg} px-4 py-2 uppercase font-semibold tracking-wide`}>{children}</button>
    )
}

export default Button